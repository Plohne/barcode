// src/js/services/product-service.js
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  collection,
  getDocs,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase-config.js';

// Get product by barcode from global catalog
export const getProductByBarcode = async (barcode) => {
  const productDoc = await getDoc(doc(db, 'products', barcode));
  if (productDoc.exists()) {
    return { id: productDoc.id, ...productDoc.data() };
  }
  return null;
};

// Create new product in global catalog
export const createProduct = async (barcode, productData) => {
  // Handle both string (name only) and object formats
  const name = typeof productData === 'string' ? productData : productData?.name;
  const description = typeof productData === 'object' ? (productData?.description || '') : '';
  const imageUrl = typeof productData === 'object' ? (productData?.imageUrl || null) : null;
  const category = typeof productData === 'object' ? (productData?.category || 'uncategorized') : 'uncategorized';
  
  const product = {
    barcode,
    name,
    description,
    imageUrl,
    category,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  
  await setDoc(doc(db, 'products', barcode), product);
  return product;
};

// Update product in global catalog
export const updateProduct = async (barcode, updates) => {
  const productRef = doc(db, 'products', barcode);
  await updateDoc(productRef, {
    ...updates,
    updatedAt: serverTimestamp()
  });
};

// Search products by name (basic client-side search)
export const searchProducts = async (searchTerm) => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  
  const products = [];
  const searchLower = searchTerm.toLowerCase();
  
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.name && data.name.toLowerCase().includes(searchLower)) {
      products.push({ id: doc.id, ...data });
    }
  });
  
  return products;
};

// Get or create product - returns existing or creates new
export const getOrCreateProduct = async (barcode, productData) => {
  let product = await getProductByBarcode(barcode);
  
  if (!product && productData) {
    product = await createProduct(barcode, productData);
  }
  
  return product;
};
