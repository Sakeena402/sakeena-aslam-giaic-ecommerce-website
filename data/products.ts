export interface Product {
    image: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    discount?: number;
    category?:string;
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
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      reviews: 5,
      price: 120,
      category: 'T-Shirts',
    },
    {
      image: './Frame10.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      reviews: 3,
      price: 240,
      originalPrice: 260,
      discount: 20,
      category: 'Jeans',
    },
    {
      image: './Frame11.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      reviews: 4,
      price: 180,
      category: 'Shirts',
    },
    {
      image: './Frame12.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      reviews: 4,
      price: 130,
      originalPrice: 160,
      discount: 30,
      category: 'T-Shirts',
    },
    {
      image: './Frame1.png',
      title: 'Casual Hoodie',
      rating: 4.0,
      reviews: 7,
      price: 300,
      originalPrice: 350,
      discount: 50,
      category: 'Hoodies',
    },
    {
      image: './Frame2.png',
      title: 'Sports Shorts',
      rating: 4.3,
      reviews: 6,
      price: 90,
      category: 'Shorts',
    },
    {
      image: './Frame3.png',
      title: 'Formal Blazer',
      rating: 4.8,
      reviews: 8,
      price: 450,
      originalPrice: 500,
      discount: 50,
      category: 'Formal Wear',
    },
    {
      image: './Frame4.png',
      title: 'Cargo Pants',
      rating: 4.6,
      reviews: 5,
      price: 250,
      category: 'Pants',
    },
    {
      image: './Frame5.png',
      title: 'Party Wear Dress',
      rating: 4.9,
      reviews: 12,
      price: 600,
      category: 'Party Wear',
    },
    {
      image: './Frame6.png',
      title: 'Gym Wear Tights',
      rating: 4.3,
      reviews: 10,
      price: 200,
      category: 'Gym Wear',
    },
    {
      image: './Frame7.png',
      title: 'Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 350,
      category: 'Jackets',
    },
    {
      image: './Frame11.png',
      title: 'Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 350,
      category: 'Jackets',
    },


    {
      image: './Frame9.png',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      reviews: 5,
      price: 120,
      category: 'T-Shirts',
    },
    {
      image: './Frame10.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      reviews: 3,
      price: 240,
      originalPrice: 260,
      discount: 20,
      category: 'Jeans',
    },
    {
      image: './Frame11.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      reviews: 4,
      price: 180,
      category: 'Shirts',
    },
    {
      image: './Frame12.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      reviews: 4,
      price: 130,
      originalPrice: 160,
      discount: 30,
      category: 'T-Shirts',
    },
    {
      image: './Frame1.png',
      title: 'Casual Hoodie',
      rating: 4.0,
      reviews: 7,
      price: 300,
      originalPrice: 350,
      discount: 50,
      category: 'Hoodies',
    },
    {
      image: './Frame2.png',
      title: 'Sports Shorts',
      rating: 4.3,
      reviews: 6,
      price: 90,
      category: 'Shorts',
    },
    {
      image: './Frame3.png',
      title: 'Formal Blazer',
      rating: 4.8,
      reviews: 8,
      price: 450,
      originalPrice: 500,
      discount: 50,
      category: 'Formal Wear',
    },
    {
      image: './Frame4.png',
      title: 'Cargo Pants',
      rating: 4.6,
      reviews: 5,
      price: 250,
      category: 'Pants',
    },
    {
      image: './Frame5.png',
      title: 'Party Wear Dress',
      rating: 4.9,
      reviews: 12,
      price: 600,
      category: 'Party Wear',
    },
    {
      image: './Frame6.png',
      title: 'Gym Wear Tights',
      rating: 4.3,
      reviews: 10,
      price: 200,
      category: 'Gym Wear',
    },
    {
      image: './Frame7.png',
      title: 'Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 350,
      category: 'Jackets',
    },
    {
      image: './Frame11.png',
      title: 'Denim Jacket',
      rating: 4.7,
      reviews: 9,
      price: 350,
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
  