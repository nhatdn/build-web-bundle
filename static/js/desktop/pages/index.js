import FagComponent from '../components/fag-component';
import BannerComponent from '../components/banner-component';
import IconBackToTop from '../assets/back-to-top.png';

import React, { useEffect, useState } from 'react';

import SolialComponent from '../components/social-component';
import MenuComponent from '../components/menu-component';
import LastestNewsComponent from '../components/lastest-news-component';
import AddictiveGameplayComponent from '../components/addictive-gameplay-component';
import RoadmapComponent from '../components/roadmap-component';
import MarketeplaceComponent from '../components/marketplace-component';
import PartnerComponent from '../components/partner-component';
import FooterComponent from '../components/footer-component';
import TrailerComponent from '../components/trailer-component';
import ReactFullpage from '@fullpage/react-fullpage';
import Logo from '../assets/logo.png';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const MainDesktop = () => (
  <ReactFullpage
    licenseKey=""
    v2compatible={false}
    controlArrows={true}
    anchor={['home', 'news', 'trailer', 'gameplays', 'roadmap', 'marketpalce', 'partner', 'document']}
    navigation={true}
    navigationPosition={'left'}
    lazyLoading={true}
    navigationTooltips={[
      'Home',
      'News',
      'Trailer',
      'Gameplays',
      'Roadmap',
      // 'Marketpalce',
      'Partner',
      'Document'
    ]}
    scrollOverflow={true}
    // showActiveTooltip={true}
    scrollingSpeed={800}
    scrollBar={false}
    // loopBottom={true}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="home">
              <MenuComponent />
              <BannerComponent />
            </div>
            <div className="section" data-anchor="news">
              <LastestNewsComponent />
            </div>
            <div className="section" data-anchor="trailer">
              <TrailerComponent />
            </div>
            <div className="section" data-anchor="gameplays">
              <AddictiveGameplayComponent />
            </div>
            <div className="section" data-anchor="roadmap">
              <RoadmapComponent />
            </div>
            {/* <div className="section" data-anchor="marketpalce" >
              <MarketeplaceComponent />
            </div> */}
            <div className="section" data-anchor="partner">
              <PartnerComponent />
            </div>
            <div className="section" data-anchor="faq">
              <FooterComponent />
            </div>
          </ReactFullpage.Wrapper>
          <div className="fixed right-4 bottom-10">
            <img
              src={IconBackToTop}
              alt="icon"
              className="w-6 hover:cursor-pointer"
              onClick={() => fullpageApi.moveTo(1)}
            />
          </div>
        </>
      );
    }}
  />
);
const Desktop = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Promise.all([
      ...Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ]).then(() => {
      setLoaded(true);
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 10000);
  });
  return (
    <>
      <SolialComponent />

      <MainDesktop />

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
    </>
  );
};

// ReactDOM.render(<Desktop />, document.getElementById('root'));
export default Desktop;
