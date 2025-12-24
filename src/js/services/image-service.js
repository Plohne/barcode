// src/js/services/image-service.js
// Firebase Storage requires Blaze plan - image upload disabled for now
// Products will work without images (just name, barcode, quantity)

// Upload product image - DISABLED (requires Blaze plan)
export const uploadProductImage = async (barcode, imageFile) => {
  console.log('Image upload skipped - Firebase Storage requires Blaze plan');
  return null; // Return null, product saves without image
};

// Upload image from blob - DISABLED
export const uploadProductImageFromBlob = async (barcode, imageBlob) => {
  console.log('Image upload skipped - Firebase Storage requires Blaze plan');
  return null;
};

// Delete product image - DISABLED
export const deleteProductImage = async (imageUrl) => {
  // No-op when storage is disabled
  return;
};

// Compress image before upload (kept for future use)
export const compressImage = (file, maxWidth = 800, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        'image/jpeg',
        quality
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    
    if (file instanceof Blob) {
      img.src = URL.createObjectURL(file);
    } else {
      img.src = file;
    }
  });
};

// Convert data URL to Blob
export const dataURLtoBlob = (dataURL) => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
};
