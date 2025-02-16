const SkeletonLoader = () => {
    return (
        <div className="grid grid-rows-[auto] gap-20 min-h-screen w-full">
        {/* Navbar Skeleton */}
        <div className="h-16 bg-gray-200 animate-pulse"></div>
  
        {/* Hero Section Skeleton */}
        <div className="h-[40rem] bg-gray-300 animate-pulse"></div>
  
        {/* Product Section Skeleton */}
        <div className="p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-screen-lg">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-full h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
  
        {/* Top Selling Products Skeleton */}
        <div className="p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-screen-lg">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-full h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
  
        {/* Style Section Skeleton */}
        <div className="h-64 bg-gray-200 animate-pulse"></div>
  
        {/* Customer Feedback Skeleton */}
        <div className="h-64 bg-gray-300 animate-pulse"></div>
  
        {/* Footer Skeleton */}
        <div className="h-24 bg-gray-200 animate-pulse"></div>
      </div>
    );
  };
  
  
  export default SkeletonLoader;
  