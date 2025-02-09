import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { promisify } from 'util';


dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_AUTH_TOKEN,
});



export const products = [
  {
    "_type": "products",
    "name": "Casual Green Bomber Jacket",
    "price": 120,
    "description": "This stylish green bomber jacket offers a sleek and modern twist on a classic design, with a minimalist style perfect for layering over casual t-shirts or hoodies.",
    "category": "jackets",
    "stockQuantity": 50,
    "new": true,
    "size": ["M", "L", "XL"],
    "colors": ["Green"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.5],
    "reviews": [],
    "slug": {
      "current": "casual-green-bomber-jacket"
    },
    "tags": ["Bomber", "Casual", "Green", "Jacket"]
  },
  {
    "_type": "products",
    "name": "Classic White Pullover Hoodie",
    "price": 45,
    "description": "This white pullover hoodie offers a clean, minimalist look with a spacious fit and adjustable drawstring for a personalized touch.",
    "category": "hoodies",
    "stockQuantity": 70,
    "new": true,
    "size": ["S", "M", "L"],
    "colors": ["White"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.3],
    "reviews": [],
    "slug": {
      "current": "classic-white-pullover-hoodie"
    },
    "tags": ["Pullover", "White", "Hoodie", "Casual"]
  },
  {
    "_type": "products",
    "name": "Gradient Graphic T-Shirt",
    "price": 30,
    "description": "Add a bold and artistic touch to your wardrobe with this unique graphic t-shirt featuring a vibrant abstract swirl design and motivational slogan.",
    "category": "t-shirts",
    "stockQuantity": 40,
    "new": true,
    "size": ["M", "L", "XL"],
    "colors": ["Multicolor"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.6],
    "reviews": [],
    "slug": {
      "current": "gradient-graphic-t-shirt"
    },
    "tags": ["Graphic", "T-shirt", "Abstract", "Multicolor"]
  },
  {
    "_type": "products",
    "name": "Classic Black Straight-Leg Jeans",
    "price": 55,
    "description": "These classic black jeans feature a straight-leg cut and durable denim, perfect for casual or semi-formal occasions with a sleek and sophisticated look.",
    "category": "jeans",
    "stockQuantity": 80,
    "new": false,
    "size": ["S", "M", "L", "XL"],
    "colors": ["Black"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.7],
    "reviews": [],
    "slug": {
      "current": "classic-black-straight-leg-jeans"
    },
    "tags": ["Jeans", "Black", "Straight-Leg", "Casual"]
  },
  {
    "_type": "products",
    "name": "Classic Black Long Sleeve Button-Down Shirt",
    "price": 60,
    "description": "This sleek black button-down shirt offers a tailored fit and timeless style, perfect for both professional and casual settings.",
    "category": "shirts",
    "stockQuantity": 50,
    "new": false,
    "size": ["M", "L", "XL"],
    "colors": ["Black"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.5],
    "reviews": [],
    "slug": {
      "current": "classic-black-long-sleeve-button-down-shirt"
    },
    "tags": ["Shirt", "Black", "Button-Down", "Formal"]
  },
  {
    "_type": "products",
    "name": "Classic Black Pullover Hoodie",
    "price": 50,
    "description": "A versatile black pullover hoodie made from soft fabric with an adjustable drawstring and a spacious front pocket, perfect for casual outings.",
    "category": "hoodies",
    "stockQuantity": 60,
    "new": true,
    "size": ["M", "L", "XL"],
    "colors": ["Black"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.4],
    "reviews": [],
    "slug": {
      "current": "classic-black-pullover-hoodie"
    },
    "tags": ["Pullover", "Black", "Hoodie", "Casual"]
  },
  {
    "_type": "products",
    "name": "Gray Slim-Fit Jogger Pants",
    "price": 40,
    "description": "These comfortable gray jogger pants feature a slim fit and cuffed ankles, perfect for a modern, sporty look with a soft, relaxed fit.",
    "category": "pants",
    "stockQuantity": 55,
    "new": false,
    "size": ["M", "L"],
    "colors": ["Gray"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.3],
    "reviews": [],
    "slug": {
      "current": "gray-slim-fit-jogger-pants"
    },
    "tags": ["Jogger", "Gray", "Slim-Fit", "Casual"]
  },
  {
    "_type": "products",
    "name": "Courage Graphic T-Shirt",
    "price": 35,
    "description": "A bold and expressive tee featuring a standout graphic design, combining comfort with statement style for those who want to show their courage.",
    "category": "t-shirts",
    "stockQuantity": 60,
    "new": true,
    "size": ["S", "M", "L"],
    "colors": ["Multicolor"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.8],
    "reviews": [],
    "slug": {
      "current": "courage-graphic-t-shirt"
    },
    "tags": ["Graphic", "T-shirt", "Bold", "Statement"]
  },
  {
    "_type": "products",
    "name": "Light Blue Denim Jacket",
    "price": 70,
    "description": "A classic light blue denim jacket featuring a timeless design with a relaxed fit, perfect for layering over any outfit.",
    "category": "jackets",
    "stockQuantity": 45,
    "new": false,
    "size": ["S", "M", "L"],
    "colors": ["Blue"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.6],
    "reviews": [],
    "slug": {
      "current": "light-blue-denim-jacket"
    },
    "tags": ["Denim", "Blue", "Jacket", "Casual"]
  },
  {
    "_type": "products",
    "name": "Camo Print Cargo Pants",
    "price": 50,
    "description": "These camo print cargo pants feature a comfortable fit with plenty of pockets for added functionality, ideal for casual outings or outdoor activities.",
    "category": "pants",
    "stockQuantity": 60,
    "new": true,
    "size": ["M", "L", "XL"],
    "colors": ["Camouflage"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.4],
    "reviews": [],
    "slug": {
      "current": "camo-print-cargo-pants"
    },
    "tags": ["Cargo", "Camo", "Pants", "Outdoor"]
  },
  {
    "_type": "products",
    "name": "Black Leather Biker Jacket",
    "price": 150,
    "description": "A premium black leather biker jacket with a sleek design, perfect for adding an edgy vibe to your casual look.",
    "category": "jackets",
    "stockQuantity": 30,
    "new": false,
    "size": ["M", "L", "XL"],
    "colors": ["Black"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.8],
    "reviews": [],
    "slug": {
      "current": "black-leather-biker-jacket"
    },
    "tags": ["Leather", "Biker", "Jacket", "Black"]
  },
  {
    "_type": "products",
    "name": "Red Graphic Sweatshirt",
    "price": 45,
    "description": "This vibrant red sweatshirt features a bold graphic design that adds personality to your casual look while keeping you warm and comfy.",
    "category": "sweatshirts",
    "stockQuantity": 50,
    "new": true,
    "size": ["M", "L"],
    "colors": ["Red"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.6],
    "reviews": [],
    "slug": {
      "current": "red-graphic-sweatshirt"
    },
    "tags": ["Sweatshirt", "Red", "Graphic", "Casual"]
  },
  {
    "_type": "products",
    "name": "Beige Chino Shorts",
    "price": 35,
    "description": "These beige chino shorts offer a relaxed and comfortable fit, ideal for summer or casual outings.",
    "category": "shorts",
    "stockQuantity": 80,
    "new": true,
    "size": ["S", "M", "L"],
    "colors": ["Beige"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.5],
    "reviews": [],
    "slug": {
      "current": "beige-chino-shorts"
    },
    "tags": ["Shorts", "Chino", "Beige", "Summer"]
  },
  {
    "_type": "products",
    "name": "Navy Blue Polo Shirt",
    "price": 50,
    "description": "A navy blue polo shirt with a classic collar and a modern, comfortable, classic fit, perfect for both casual and semi-casual occasions.",
    "category": "polo shirts",
    "stockQuantity": 50,
    "new": false,
    "size": ["M", "L", "XL"],
    "colors": ["Navy Blue"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.7],
    "reviews": [],
    "slug": {
      "current": "navy-blue-polo-shirt"
    },
    "tags": ["Polo", "Shirt", "Blue", "Casual"]
  },
  {
    "_type": "products",
    "name": "Light Gray Hoodie",
    "price": 55,
    "description": "A versatile light gray hoodie with adjustable drawstrings and a front pocket, providing comfort and style.",
    "category": "hoodies",
    "stockQuantity": 65,
    "new": false,
    "size": ["M", "L", "XL"],
    "colors": ["Light Gray"],
    "image": {
      "asset": [{
        "_ref": "",
        "_type": "image"
      }]
    },
    "ratings": [4.6],
    "reviews": [],
    "slug": {
      "current": "light-gray-hoodie"
    },
    "tags": ["Hoodie", "Gray", "Casual", "Comfort"]
  }
]

  const imagesFolderPath = path.resolve('./public/images');

  // Sample products data (replace this with your actual data)
 
  // Function to upload an image to Sanity
  async function uploadImage(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const imageName = path.basename(imagePath);
  
    try {
      const uploadedAsset = await client.assets.upload('image', imageBuffer, {
        filename: imageName,
      });
      console.log(`Uploaded image: ${imageName}`);
      return uploadedAsset._id; // Return the image ID from Sanity
    } catch (error) {
      console.error(`Error uploading image ${imageName}:`, error);
      return null;
    }
  }
  
  // Function to upload all images from the folder
  async function uploadAllImages() {
    const files = fs.readdirSync(imagesFolderPath);
    const imageIds = [];
  
    for (const file of files) {
      const filePath = path.join(imagesFolderPath, file);
      const stats = fs.statSync(filePath);
  
      if (stats.isFile()) {
        const imageId = await uploadImage(filePath);
        if (imageId) {
          imageIds.push(imageId);
        }
      }
    }
  
    console.log('All images uploaded, image IDs:', imageIds);
    return imageIds;
  }
  
  // Function to create a product in Sanity
  async function createProduct(productData, imageIds) {
    try {
      const newProduct = await client.create({
        _type: 'products',
        name: productData.name,
        slug: {
          _type: 'slug',
          current: productData.name.toLowerCase().replace(/\s+/g, '-'),
        },
        price: productData.price,
        description: productData.description,
        images: imageIds.map(id => ({
          _type: 'image',
          asset: { _ref: id },
        })),
        reviews: [],
        ratings: productData.ratings,
        quantity: productData.stockQuantity,
        category: productData.category,
        discountPercent: 0, // Add any logic for discount if necessary
        new: productData.new,
        colors: productData.colors,
        sizes: productData.size,
        comments: [],
        tags: productData.tags,
      });
      console.log(`Created product: ${productData.name}`);
      return newProduct;
    } catch (error) {
      console.error(`Error creating product ${productData.name}:`, error);
      return null;
    }
  }
  
  // Main function to upload images, update product data, and create products
  async function uploadProducts() {
    const imageIds = await uploadAllImages(); // Upload all images
  
    // Ensure there are enough image IDs to assign to products
    if (imageIds.length < products.length) {
      console.error('Not enough images to assign to all products');
      return;
    }
  
    // Create products in Sanity and assign images
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productImages = imageIds.slice(i * 2, i * 2 + 2); // Example: assign 2 images per product
  
      // Create product with images
      await createProduct(product, productImages);
    }
  
    console.log('All products uploaded successfully');
  }
  
  // Run the upload process
  uploadProducts().catch(console.error);




// Folder containing your images
// const IMAGE_FOLDER = './public/images'; // Adjust to your folder path

// // Map to store uploaded image references (filename => asset ID)
// const uploadedImages = {};

// // Function to upload all images in a folder
// const uploadImages = async (folderPath) => {
//   const files = fs.readdirSync(folderPath);

//   for (const file of files) {
//     const filePath = path.join(folderPath, file);

//     // Ensure the file is an image
//     if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')) {
//       console.log(`Uploading ${file}...`);

//       try {
//         const imageFile = fs.createReadStream(filePath);
//         const response = await client.assets.upload('image', imageFile, {
//           filename: file, // Keep the original file name
//         });

//         console.log(`Uploaded ${file} successfully! Asset ID: ${response._id}`);
//         uploadedImages[file] = response._id; // Store asset ID for later reference
//       } catch (err) {
//         console.error(`Failed to upload ${file}:`, err);
//       }
//     } else {
//       console.log(`${file} is not an image, skipping...`);
//     }
//   }

//   console.log('All images uploaded successfully!');
// };

// // Function to upload products data to Sanity
// const uploadProducts = async () => {
//   for (const product of products) {
//     console.log(`Uploading product: ${product.title}`);

   

//     try {
//       // Create or upload product in Sanity
//       const response = await client.create({
//         _type: 'products',
//         name: product.name,
//         category: product.category,
//         price: product.price,
//         description: product.description,
//         discountPercent: product.discountPercent,
//         ratings: product.ratings,
//         reviews: product.reviews,
//         quantity: product.quantity,
//         new: product.new,
//         colors: product.colors,
//         sizes: product.size,
//         images: {
//           _type: 'image',
//           asset: {
//             _type: 'string',
//             _ref: image.asset._ref, // Reference the uploaded image
//           },
//         },
//         tags: product.tags,
//       });
      

//       console.log(`Uploaded product: ${product.title}, Document ID: ${response._id}`);
//     } catch (err) {
//       console.error(`Failed to upload product: ${product.title}`, err);
//     }
//   }
// };

// // Main function to handle uploads
// const main = async () => {
//   console.log('Starting upload process...');
//   // await uploadImages(IMAGE_FOLDER); // Upload images
//   await uploadProducts();           // Upload product data
//   console.log('Upload process complete!');
// };

// // Execute the main function
// main().catch((err) => console.error('Error in main function:', err));










// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: 'products',
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         image: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         category: product.category,
//         discountPercent: product.discountPercent,
//         isNew: product.isNew,
//         colors: product.colors,
//         sizes: product.sizes
//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.name} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// export default async function importProducts() {
//   try {
//     const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();









// import sanityClient from '@sanity/client';
// import fs from 'fs';
// import path from 'path';

// // Initialize the Sanity client
// const client = sanityClient({
//   projectId: 'your-project-id', // Replace with your Sanity project ID
//   dataset: 'your-dataset',     // Replace with your dataset (e.g., 'production')
//   apiVersion: '2023-01-01',    // Use the latest date-based API version
//   token: 'your-write-token',   // Replace with your write token
//   useCdn: false,
// });

// // Folder containing your images
// const IMAGE_FOLDER = './images'; // Adjust to your folder path

// // Function to upload all images in a folder
// const uploadImages = async (folderPath: string) => {
//   const files = fs.readdirSync(folderPath);

//   for (const file of files) {
//     const filePath = path.join(folderPath, file);

//     // Ensure the file is an image
//     if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')) {
//       console.log(`Uploading ${file}...`);

//       try {
//         const imageFile = fs.createReadStream(filePath);
//         const response = await client.assets.upload('image', imageFile, {
//           filename: file, // Keep the original file name
//         });

//         console.log(`Uploaded ${file} successfully! Asset ID: ${response._id}`);
//       } catch (err) {
//         console.error(`Failed to upload ${file}:`, err);
//       }
//     } else {
//       console.log(`${file} is not an image, skipping...`);
//     }
//   }
// };

// // Start the upload process
// uploadImages(IMAGE_FOLDER)
//   .then(() => console.log('All images uploaded successfully!'))
//   .catch((err) => console.error('Error during upload:', err));
