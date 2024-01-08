import React from 'react';
import Icon_1 from '../assets/faq/icon-hero-1.png';
import Icon_2 from '../assets/faq/icon-hero-2.png';
import Icon_3 from '../assets/faq/icon-hero-3.png';
import Icon_4 from '../assets/faq/icon-hero-4.png';
import ImgHero from '../assets/faq/bg-main.png';
import translate from '../../i18n/translate';

const FAQS = [
  {
    image: Icon_1,
    title: 'fag-1',
    href: 'https://wofm.gitbook.io/whitepaper/user-instruction/creating-an-account'
  },
  {
    image: Icon_2,
    title: 'fag-2',
    href: 'https://wofm.gitbook.io/whitepaper/game-instruction/'
  },
  {
    image: Icon_3,
    title: 'fag-4',
    href: 'https://forms.gle/Pav7dgJxt3baW1Ja8'
  },
  {
    image: Icon_4,
    title: 'fag-3',
    href: 'https://wofm.gitbook.io/whitepaper/metamask-instruction/how-to-create-metamask-wallet'
  }
];

const ItemFaq = ({ imageItem, hrefItem, titleItem }) => {
  return (
    <a href={hrefItem} target="_blank " className="block">
      <div className="p-3 bg-gradient-to-b from-red-600 to-red-800 border-[#C90202] rounded-[10px] flex justify-start items-center">
        <img src={imageItem} alt="icon" className="h-[55px]" />
        <span className="pl-4 text-base font-bold text-left text-white">{translate(titleItem)}</span>
      </div>
    </a>
  );
};

const FaqComponent = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-mb-faq">
      <div className="w-full p-3 pt-4 sm:p-6">
        <p className=" text-[44px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center">
          FAQ
        </p>

        <div className="grid w-full grid-cols-1 gap-4 mt-8 sm:grid-cols-2 ">
          {FAQS.map((item) => {
            return <ItemFaq imageItem={item.image} hrefItem={item.href} titleItem={item.title} />;
          })}
        </div>
      </div>
      <div className="w-full mt-8">
        <img src={ImgHero} alt="Hero" className="" />
      </div>
    </div>
  );
};

export default FaqComponent;
