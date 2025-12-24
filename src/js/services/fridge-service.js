// src/js/services/fridge-service.js
import { 
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  increment
} from 'firebase/firestore';
import { db } from './firebase-config.js';

// Simple hash function for password (not cryptographically secure, but good enough for fridge codes)
// For production, use bcrypt on a backend
const simpleHash = async (str) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Find fridge by password (for login page)
export const findFridgeByPassword = async (password) => {
  if (!password) return null;
  
  const passwordHash = await simpleHash(password);
  console.log('Looking for password hash:', passwordHash);
  
  const fridgesRef = collection(db, 'fridges');
  const q = query(fridgesRef, where('passwordHash', '==', passwordHash));
  const querySnapshot = await getDocs(q);
  
  console.log('Query returned', querySnapshot.size, 'documents');
  
  if (querySnapshot.empty) {
    return null;
  }
  
  // Return the first matching fridge
  const fridgeDoc = querySnapshot.docs[0];
  console.log('Found fridge:', fridgeDoc.id);
  return {
    code: fridgeDoc.id,
    ...fridgeDoc.data()
  };
};

// Local storage key for current fridge
const CURRENT_FRIDGE_KEY = 'barcode-scanner/currentFridge';

// Get current fridge code from local storage
export const getCurrentFridgeCode = () => {
  return localStorage.getItem(CURRENT_FRIDGE_KEY);
};

// Set current fridge code in local storage
export const setCurrentFridgeCode = (code) => {
  if (code) {
    localStorage.setItem(CURRENT_FRIDGE_KEY, code);
  } else {
    localStorage.removeItem(CURRENT_FRIDGE_KEY);
  }
};

// Check if fridge exists
export const fridgeExists = async (fridgeCode) => {
  const fridgeRef = doc(db, 'fridges', fridgeCode.toLowerCase());
  const fridgeDoc = await getDoc(fridgeRef);
  return fridgeDoc.exists();
};

// Create a new fridge
export const createFridge = async (fridgeCode, name, password = null) => {
  const code = fridgeCode.toLowerCase().trim();
  
  // Check if already exists
  if (await fridgeExists(code)) {
    throw new Error('Fridge code already exists');
  }
  
  const fridgeData = {
    name: name || code,
    createdAt: serverTimestamp(),
    hasPassword: !!password,
    passwordHash: password ? await simpleHash(password) : null
  };
  
  await setDoc(doc(db, 'fridges', code), fridgeData);
  setCurrentFridgeCode(code);
  
  return { code, ...fridgeData };
};

// Join an existing fridge
export const joinFridge = async (fridgeCode, password = null) => {
  const code = fridgeCode.toLowerCase().trim();
  const fridgeRef = doc(db, 'fridges', code);
  const fridgeDoc = await getDoc(fridgeRef);
  
  if (!fridgeDoc.exists()) {
    throw new Error('Fridge not found');
  }
  
  const fridgeData = fridgeDoc.data();
  
  // Check password if required
  if (fridgeData.hasPassword) {
    if (!password) {
      throw new Error('Password required');
    }
    const passwordHash = await simpleHash(password);
    if (passwordHash !== fridgeData.passwordHash) {
      throw new Error('Incorrect password');
    }
  }
  
  setCurrentFridgeCode(code);
  return { code, ...fridgeData };
};

// Leave current fridge (just clears local storage)
export const leaveFridge = () => {
  setCurrentFridgeCode(null);
};

// Get fridge info
export const getFridgeInfo = async (fridgeCode = null) => {
  const code = fridgeCode || getCurrentFridgeCode();
  if (!code) return null;
  
  const fridgeRef = doc(db, 'fridges', code);
  const fridgeDoc = await getDoc(fridgeRef);
  
  if (!fridgeDoc.exists()) return null;
  
  return { code, ...fridgeDoc.data() };
};

// === FRIDGE ITEMS ===

// Get all items in current fridge
export const getFridgeItems = async () => {
  const fridgeCode = getCurrentFridgeCode();
  if (!fridgeCode) throw new Error('No fridge selected');
  
  const itemsRef = collection(db, 'fridges', fridgeCode, 'items');
  const q = query(itemsRef, orderBy('addedAt', 'desc'));
  const snapshot = await getDocs(q);
  
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  
  return items;
};

// Add item to fridge
export const addToFridge = async (barcode, productData = {}, quantity = 1) => {
  const fridgeCode = getCurrentFridgeCode();
  if (!fridgeCode) throw new Error('No fridge selected');
  
  const itemsRef = collection(db, 'fridges', fridgeCode, 'items');
  
  // Check if item already exists in fridge
  const existingQuery = query(itemsRef, where('barcode', '==', barcode));
  const existingSnapshot = await getDocs(existingQuery);
  
  if (!existingSnapshot.empty) {
    // Item exists, increment quantity
    const existingDoc = existingSnapshot.docs[0];
    await updateDoc(existingDoc.ref, {
      quantity: increment(quantity),
      productName: productData.name || existingDoc.data().productName, // Update name if provided
      updatedAt: serverTimestamp()
    });
    const data = existingDoc.data();
    return { id: existingDoc.id, ...data, quantity: data.quantity + quantity };
  }
  
  // Add new item
  const newItem = {
    barcode,
    productName: productData.name || 'Unknown Product',
    productImageUrl: productData.imageUrl || null,
    quantity: quantity,
    addedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    expiryDate: productData.expiryDate || null,
    notes: productData.notes || ''
  };
  
  const docRef = await addDoc(itemsRef, newItem);
  return { id: docRef.id, ...newItem };
};

// Update fridge item quantity
export const updateFridgeItemQuantity = async (itemId, newQuantity) => {
  const fridgeCode = getCurrentFridgeCode();
  if (!fridgeCode) throw new Error('No fridge selected');
  
  const itemRef = doc(db, 'fridges', fridgeCode, 'items', itemId);
  
  if (newQuantity <= 0) {
    await deleteDoc(itemRef);
    return null;
  }
  
  await updateDoc(itemRef, {
    quantity: newQuantity,
    updatedAt: serverTimestamp()
  });
  
  return { id: itemId, quantity: newQuantity };
};

// Remove item from fridge
export const removeFromFridge = async (itemId) => {
  const fridgeCode = getCurrentFridgeCode();
  if (!fridgeCode) throw new Error('No fridge selected');
  
  const itemRef = doc(db, 'fridges', fridgeCode, 'items', itemId);
  await deleteDoc(itemRef);
};

// Get fridge item by barcode
export const getFridgeItemByBarcode = async (barcode) => {
  const fridgeCode = getCurrentFridgeCode();
  if (!fridgeCode) return null;
  
  const itemsRef = collection(db, 'fridges', fridgeCode, 'items');
  const q = query(itemsRef, where('barcode', '==', barcode));
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) return null;
  
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
};
