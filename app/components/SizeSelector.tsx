import React from "react";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div className="border-t">
 <h3 className="text-gray-500 mt-3 text-small font-extralight ">Choose Size</h3>
    <div className="flex gap-2 mt-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`px-4 py-2 rounded-full border text-sm text-gray-500 ${
            selectedSize === size ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
    </div>
  );
};

export default SizeSelector;
