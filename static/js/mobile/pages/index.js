import AddictiveGameplayComponent from '../components/addictive-gameplay-component';
import BannerComponent from '../components/banner-component';
import FaqComponent from '../components/faq-component';
import FooterComponent from '../components/footer-component';
import LastestNewsComponent from '../components/lastest-news-component';
import MarketpalceComponent from '../components/marketplace-component';
import MenuComponent from '../components/menu-component';
import PartnerComponent from '../components/partner-component';
import RoadmapComponent from '../components/roadmap-component';
import IconBackToTop from '../assets/back-to-top.png';
import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';

// import styled from 'styled-components';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const Mobile = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      setLoaded(true);
    });
  }, []);
  return (
    <div>
      <MenuComponent />
      <BannerComponent />
      <LastestNewsComponent />
      <AddictiveGameplayComponent />
      <RoadmapComponent />
      {/* <MarketpalceComponent /> */}
      <PartnerComponent />
      <FaqComponent />
      <FooterComponent />

      <div className="fixed right-4 bottom-16 md:bottom-10 md:right-10">
        <img src={IconBackToTop} alt="icon" className="w-6 hover:cursor-pointer" onClick={() => scrollToTop()} />
      </div>

      <div
        className={`w-screen h-screen fixed z-[9999] top-0 duration-1000 transition-all ${
          loaded ? 'opacity-0 -translate-y-full' : 'opacity-100'
        }`}
      >
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full gap-3">
          <img className="w-72" alt="loading" src={Logo}></img>
          <p className="text-3xl font-bold text-center text-white font-UTM-Guanine animate-pulse">LOADING...</p>
        </div>
        <div className="w-full h-full bg-[#910000] opacity-80 absolute"></div>
      </div>
    </div>
  );
};

export default Mobile;
