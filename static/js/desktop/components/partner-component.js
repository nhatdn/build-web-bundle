import React from 'react';
import logoEvan from '../assets/backer/logo-evan.png';
import logoRikkei from '../assets/backer/logo-rikkei.png';
import logoCabo from '../assets/backer/logo-cabo.png';
import partner_1 from '../assets/backer/partner_1.png';
import partner_2 from '../assets/backer/partner_2.png';
import partner_3 from '../assets/backer/partner_3.png';
import partner_4 from '../assets/backer/partner_4.png';
import partner_5 from '../assets/backer/partner_5.png';
import partner_6 from '../assets/backer/partner_6.png';
import partner_7 from '../assets/backer/partner_7.png';
import partner_8 from '../assets/backer/partner_8.png';
import partner_9 from '../assets/backer/partner_9.png';
import partner_10 from '../assets/backer/partner_10.png';
import partner_11 from '../assets/backer/partner_11.png';
import partner_12 from '../assets/backer/partner_12.png';
import partner_13 from '../assets/backer/partner_13.png';
import partner_14 from '../assets/backer/partner_14.png';
import partner_15 from '../assets/backer/partner_15.png';
import partner_16 from '../assets/backer/partner_16.png';
import ImageLazy from '../../components/imageLazyLoad';
const PartnerComponent = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[715px] h-screen bg-no-repeat bg-cover bg-backer">
      <div className="xl:w-full  m-auto 2xl:pt-10">
        <div className="text-center">
          <p className="!leading-normal xl:text-4xl 2xl:text-5xl font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center">
            BACKER
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <ImageLazy image={logoEvan} className="xl:h-[100px] 2xl:h-[120px] hover:scale-110 hover:duration-300" />
            <ImageLazy image={logoRikkei} className="xl:h-[100px] 2xl:h-[120px] hover:scale-110 hover:duration-300" />
            <ImageLazy image={logoCabo} className="xl:h-[100px] 2xl:h-[120px] hover:scale-110 hover:duration-300" />
          </div>
        </div>
        <div className="p-8 text-center">
          <p className="xl:pt-2 2xl:pt-6 xl:text-4xl 2xl:text-[48px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center 2xl:!leading-[5rem]  uppercase">
            Marketing Partners
          </p>
          <div className="grid grid-cols-5 gap-4 pt-8 w-[70%] m-auto ">
            <div className="flex justify-center">
              <ImageLazy image={partner_1} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_2} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_3} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_11} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_14} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_4} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_5} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_10} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_12} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_15} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_7} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_8} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_9} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_13} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
            <div className="flex justify-center">
              <ImageLazy image={partner_16} className="xl:w-[200px] 2xl:w-[250px] hover:scale-110 hover:duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnerComponent;
