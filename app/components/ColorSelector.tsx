import React from "react";

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelect }) => {
  return (
    <div>
 <h3 className="text-gray-500 mt-3 text-small font-extralight">Select Color</h3>
    <div className="flex gap-2 mt-4 ">
       
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelect(color)}
          className={`w-8 h-8 m-2 rounded-full  ${
            selectedColor === color ? "ring-4 ring-black" : "ring-4 ring-gray-200 "
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
    </div>
   
  );
};

export default ColorSelector;
