export interface Product {
    image: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    discount?: number;
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
  