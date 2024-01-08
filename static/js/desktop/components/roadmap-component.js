import React from 'react';
import imgMap from '../assets/roadmap/map.png';
import ImageLazy from '../../components/imageLazyLoad';
const RoadmapComponent = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[715px] h-screen pb-16 bg-no-repeat bg-cover bg-roadmap">
      <div className="w-[1280px] m-auto px-8">
        <div className="text-center">
          <p className="pt-8 text-5xl leading-normal font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center">
            ROADMAP
          </p>
          <ImageLazy image={imgMap} className="w-8/12 m-auto 2xl:w-full" />
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;
