// StyleSection Component
import { dressStyleData } from '@/data/products';
import React from 'react';
import { Card } from './Card';

type Props = {};

const StyleSection = (props: Props) => {
  return (
    <div className="bg-[#F0F0F0] p-10 border rounded-2xl w-full  h-auto">
      {/* Title */}
      <div className="text-center mb-10 p-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-black tracking-tighter leading-tight">
          BROWSE BY DRESS STYLE
        </h2>
      </div>

      {/* Grid layout with varying sizes 
            xl:w-[36rem] xl:h-[26rem]
            xl:w-[66rem] xl:h-[26rem]
            xl:w-[64rem] xl:h-[26rem]
            xl:w-[46rem] xl:h-[26rem]
            xl:w-[36rem] h-72  xl:h-[26rem]
            xl:grid-cols-8 xl:grid-rows-2
            xl:grid-cols-8 xl:grid-rows-2
            xl:col-span-5
xl:col-span-5

      */}
      <div className="grid md:grid-cols-6 md:grid-rows-2   grid-cols-1 grid-rows-4 overflow-x-hidden gap-4 p-6 ">
        {/* First Row */}
        <div className="  md:col-span-2 row-span-1">
          <Card
            name={dressStyleData[0].name}
            backgroundImage={dressStyleData[0].backgroundImage}
            customStyles="lg:w-80 lg:h-72 h-72 xl:w-96 xl:h-80 rounded-2xl"
          />
        </div>
        <div className=" md:col-span-4 row-span-1 ">
          <Card
            name={dressStyleData[1].name}
            backgroundImage={dressStyleData[1].backgroundImage}
            customStyles="'lg:w-[56rem] lg:h-72 h-72  xl:h-80 xl:w-[54rem]   rounded-2xl"
          />
        </div>

        {/* Second Row */}
        <div className=" md:col-span-4 row-span-1">
          <Card
            name={dressStyleData[2].name}
            backgroundImage={dressStyleData[2].backgroundImage}
            customStyles="lg:w-[43rem] lg:h-72 h-72 xl:h-80 xl:w-[54rem]   rounded-2xl"
          />
        </div>
        <div className="  md:col-span-2 row-span-1">
          <Card
            name={dressStyleData[3].name}
            backgroundImage={dressStyleData[3].backgroundImage}
            customStyles="lg:w-80 lg:h-72 h-72 xl:w-96 xl:h-80 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StyleSection;
