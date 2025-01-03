export interface Product {
    image: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    discount?: number;
    category?:string;
    quantity?:number
  }
  export interface Review {
    rating: number;
    customerName: string;
    review: string;
  }
  
  export const products: Product[] = [
    {
      image: './Frame1.png',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      reviews: 5,
      price: 120,
    },
    {
      image: './Frame2.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      reviews: 3,
      price: 240,
      originalPrice: 260,
      discount: 20,
    },
    {
      image: './Frame3.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      reviews: 4,
      price: 180,
    },
    {
      image: './Frame4.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      reviews: 4,
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];
  

  


  
  export const products2: Product[] = [
    {
      image: './Frame5.png',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      reviews: 5,
      price: 120,
    },
    {
      image: './Frame6.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      reviews: 3,
      price: 240,
      originalPrice: 260,
      discount: 20,
    },
    {
      image: './Frame7.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      reviews: 4,
      price: 180,
    },
    {
      image: './Frame8.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      reviews: 4,
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];
  
  export const reviews = [
    {
      rating: 5,
      customerName: 'John Doe',
      review: 'Amazing service, very satisfied! The staff were incredibly helpful and friendly. The entire experience exceeded my expectation. Highly recommend this service to anyone looking for quality and professionalism!'
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      review: 'Good, but room for improvement. The service was generally good, and the staff were pleasant.But i didn’t receive timely updates on my order, which was a bit frustrating. '
    },
    {
      rating: 3,
      customerName: 'Alice Johnson',
      review: 'It was okay, nothing special. The service was adequate, but there wasn’t anything that stood out. The quality of the product was average. but I was hoping for something more impressive. Not a bad experience, but also not a great one.'
    },
    {
      rating: 5,
      customerName: 'Tom Harris',
      review: 'Exceeded my expectations, fantastic! From start to finish, the service was exceptional. The team went above and beyond to ensure my satisfaction, and the quality of the product was top-notch. Will definitely be back and will recommend this to all my friends and family.'
    },
    {
      rating: 2,
      customerName: 'Sophie Lee',
      review: 'Not up to the mark, could be better. Unfortunately, my experience was disappointing. While the staff was polite, I encountered several issues with the product I received. I hope the service improves in the future, as I was initially excited about trying it.'
    },
  ];
  



  export const products3: Product[] = [
    {
      image: './Frame9.png',
      title: 'Classic White Tee',
      rating: 4.5,
      reviews: 5,
      price: 150,
      quantity: 10,
      category: 'T-Shirts',
    },
    {
      image: './Frame10.png',
      title: 'Slim Fit Blue Jeans',
      rating: 3.5,
      reviews: 3,
      price: 280,
      originalPrice: 300,
      discount: 20,
      quantity: 15,
      category: 'Jeans',
    },
    {
      image: './Frame11.png',
      title: 'Plaid Casual Shirt',
      rating: 4.5,
      reviews: 4,
      price: 200,
      quantity: 20,
      category: 'Shirts',
    },
    {
      image: './Frame12.png',
      title: 'Striped Sleeve Tee',
      rating: 4.5,
      reviews: 4,
      price: 140,
      originalPrice: 170,
      discount: 30,
      quantity: 8,
      category: 'T-Shirts',
    },
    {
      image: './Frame1.png',
      title: 'Warm Knit Hoodie',
      rating: 4.0,
      reviews: 7,
      price: 320,
      originalPrice: 370,
      discount: 50,
      quantity: 12,
      category: 'Hoodies',
    },
    {
      image: './Frame2.png',
      title: 'Sporty Running Shorts',
      rating: 4.3,
      reviews: 6,
      price: 110,
      quantity: 25,
      category: 'Shorts',
    },
    {
      image: './Frame3.png',
      title: 'Elegant Black Blazer',
      rating: 4.8,
      reviews: 8,
      price: 500,
      originalPrice: 550,
      discount: 50,
      quantity: 5,
      category: 'Formal Wear',
    },
    {
      image: './Frame4.png',
      title: 'Casual Cargo Pants',
      rating: 4.6,
      reviews: 5,
      price: 270,
      quantity: 18,
      category: 'Pants',
    },
    {
      image: './Frame5.png',
      title: 'Velvet Party Dress',
      rating: 4.9,
      reviews: 12,
      price: 620,
      quantity: 7,
      category: 'Party Wear',
    },
    {
      image: './Frame6.png',
      title: 'Stretchable Gym Tights',
      rating: 4.3,
      reviews: 10,
      price: 220,
      quantity: 30,
      category: 'Gym Wear',
    },
    {
      image: './Frame7.png',
      title: 'Fleece Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 360,
      quantity: 10,
      category: 'Jackets',
    },
    {
      image: './Frame11.png',
      title: 'Winter Padded Jacket',
      rating: 4.7,
      reviews: 9,
      price: 400,
      quantity: 6,
      category: 'Jackets',
    },
    {
      image: './Frame9.png',
      title: 'Graphic Print Tee',
      rating: 4.5,
      reviews: 5,
      price: 160,
      quantity: 15,
      category: 'T-Shirts',
    },
    {
      image: './Frame10.png',
      title: 'Distressed Denim Jeans',
      rating: 3.5,
      reviews: 3,
      price: 260,
      originalPrice: 290,
      discount: 30,
      quantity: 10,
      category: 'Jeans',
    },
    {
      image: './Frame11.png',
      title: 'Oxford Formal Shirt',
      rating: 4.5,
      reviews: 4,
      price: 210,
      quantity: 12,
      category: 'Shirts',
    },
    {
      image: './Frame12.png',
      title: 'Printed T-shirt',
      rating: 4.5,
      reviews: 4,
      price: 150,
      originalPrice: 180,
      discount: 30,
      quantity: 20,
      category: 'T-Shirts',
    },
    {
      image: './Frame1.png',
      title: 'Zippered Hoodie',
      rating: 4.0,
      reviews: 7,
      price: 340,
      originalPrice: 390,
      discount: 50,
      quantity: 9,
      category: 'Hoodies',
    },
    {
      image: './Frame2.png',
      title: 'Loose Fit Shorts',
      rating: 4.3,
      reviews: 6,
      price: 100,
      quantity: 22,
      category: 'Shorts',
    },
    {
      image: './Frame3.png',
      title: 'Classic Gray Blazer',
      rating: 4.8,
      reviews: 8,
      price: 480,
      originalPrice: 520,
      discount: 40,
      quantity: 4,
      category: 'Formal Wear',
    },
    {
      image: './Frame4.png',
      title: 'Summer Cargo Pants',
      rating: 4.6,
      reviews: 5,
      price: 260,
      quantity: 16,
      category: 'Pants',
    },
    {
      image: './Frame5.png',
      title: 'Elegant Evening Dress',
      rating: 4.9,
      reviews: 12,
      price: 650,
      quantity: 5,
      category: 'Party Wear',
    },
    {
      image: './Frame6.png',
      title: 'Yoga Wear Leggings',
      rating: 4.3,
      reviews: 10,
      price: 210,
      quantity: 25,
      category: 'Gym Wear',
    },
    {
      image: './Frame7.png',
      title: 'Stylish Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 370,
      quantity: 8,
      category: 'Jackets',
    },
  ];
  

  export const dressStyleData = [
    {
      name: 'Modern Fit',
      backgroundImage: './p2.avif',
      // Square card with rounded corners
    },
    {
      name: 'Casual Chic',
      backgroundImage: './p4.avif',
       // Rectangular card
    },
    {
      name: 'Classic Look',
      backgroundImage: './p2.avif ',
       // Rectangular card
    },
    {
      name: 'Party',
      backgroundImage: './p4.avif',
     // Square card with rounded corners
    },
  ];
  