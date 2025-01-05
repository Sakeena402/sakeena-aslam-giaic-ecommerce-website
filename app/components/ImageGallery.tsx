import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col md:flex-row items-start md:m-11  m-6 gap-4">
      {/* Thumbnail Strip */}
      <div className="flex md:flex-col gap-5">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-28 h-28 md:w-36 md:h-32 lg:w-32 lg:h-32 rounded-lg overflow-hidden  transition ${
              selectedImage === image
                ? "border-black"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <div className="w-[380px] h-[350px] md:w-[400px] md:h-[430px] lg:w-[370px] lg:h-[430px]">
          <img
            src={selectedImage}
            alt="Selected product" 
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
