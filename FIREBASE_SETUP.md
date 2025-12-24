# Firebase Configuration Guide

## Firestore Security Rules

Copy these rules to Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Global products catalog - readable and writable by all authenticated users
    match /products/{barcode} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null;
    }
    
    // Fridges - anyone can read basic info, create new fridges
    match /fridges/{fridgeCode} {
      // Allow reading fridge metadata (to check if it exists, has password)
      allow read: if request.auth != null;
      
      // Allow creating new fridges
      allow create: if request.auth != null;
      
      // Don't allow updating fridge settings for now
      // (could add admin functionality later)
      allow update: if false;
      allow delete: if false;
      
      // Fridge items subcollection - open access for authenticated users
      // In a real app, you'd validate the password server-side
      match /items/{itemId} {
        allow read, write: if request.auth != null;
      }
    }
  }
}
```

## Storage Security Rules

Copy these rules to Firebase Console → Storage → Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Product images - anyone authenticated can read/write
    match /products/{barcode}/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024  // Max 5MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

## Firebase Console Setup Checklist

### 1. Authentication
- Go to **Build → Authentication → Sign-in method**
- Enable **Anonymous** sign-in

### 2. Firestore Database
- Go to **Build → Firestore Database**
- Click **Create database**
- Select **europe-north1 (Finland)** or another European region
- Start in **test mode** (we'll add rules above)

### 3. Storage
- Go to **Build → Storage**
- Click **Get started**
- Select same region as Firestore
- Apply rules above

### 4. Get Config
- Go to **Project Settings** (gear icon)
- Scroll to **Your apps**
- Click web icon **</>** to add a web app
- Copy the `firebaseConfig` object
- Paste into `src/js/services/firebase-config.js`

## Your Firebase Config

Replace the placeholder in `firebase-config.js` with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```
