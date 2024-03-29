import React from 'react';
import IconPlay from '../assets/banner/icon_play.png';
import IconShopping from '../assets/banner/icon-shopping.png';
import translate from '../../i18n/translate';
import ImgPopup from '../assets/banner/img-popup.png';
import Popup from 'reactjs-popup';
import { ReactComponent as IconClose } from '../assets/banner/xmark-solid.svg';
import PopupComingSoon from './coming-soon';
import DownloadIos from '../assets/download-ios.png';
import DownloadAndroid from '../assets/download-android.png';
import DownloadPC from '../assets/download-pc.png';

const PopupDownload = ({ close }) => {
  return (
    <div className="flex w-screen h-screen p-5 text-white bg-black/70">
      <div className="relative w-1/2 h-48 m-auto">
        <img src={ImgPopup} alt="" className="w-full h-44" />
        <div className="absolute top-0 left-0 w-full p-3">
          <div className="flex justify-end w-full h-8 pr-1">
            <IconClose className="w-4 md:w-6 fill-white" onClick={close}></IconClose>
          </div>
          <p className="px-8 text-justify md:pt-3">{translate('btn-download-banner-event')}</p>
        </div>
      </div>
    </div>
  );
};

const BannerComponent = () => {
  return (
    <div className="w-full min-h-[715px] h-screen bg-no-repeat bg-cover bg-banner">
      <div className="relative w-full h-full">
        <div className="absolute h-full flex justify-center flex-col left-[11%] top-0 2xl:top-0 w-[420px] xl:w-[470px] 2xl:w-[550px]">
          <p className="!leading-normal  xl:text-3xl 2xl:text-5xl font-bold font-UTM-Guanine bg-gradient-to-b from-[#D31616] to-[#D06D3D] text-transparent bg-clip-text">
            {translate('slogan-banner')}
          </p>

          <p className="pt-4 font-medium text-black 2xl:text-base xl:text-sm">{translate('description-banner')}</p>

          <p className="pt-3 text-[#D3333D] font-medium space-x-2 2xl:text-base xl:text-sm">
            <a href="" target="" className="hover:text-[#3498db]">
              #WorldOfMasters
            </a>
            <a href="" target="" className="hover:text-[#3498db]">
              #WOFM
            </a>
            <a href="" target="" className="hover:text-[#3498db]">
              #FreeToPlay
            </a>
            <a href="" target="" className="hover:text-[#3498db]">
              #PlayToEarn
            </a>
          </p>

          <div className="w-full xl:py-2 2xl:py-3 text-center bg-[#383838] rounded-[10px] mt-3 hover:opacity-80 transition cursor-pointer">
            <p className="text-white">
              <a
                href="https://bscscan.com/token/0x918f2fe1b50ECaeaeb95482669881eD42A978083"
                target={'_blank'}
                rel="noreferrer"
              >
                BSC 0x918f2fe1b50ECaeaeb95482669881eD42A978083
              </a>
            </p>
          </div>

          <div className="w-full">
            <div className="flex gap-4 pt-3 text-white ">
              <a href="https://minigame.wofm.io/" rel="noopener noreferrer" target={'_blank'} className="block w-full">
                <button className="w-full bg-[#D72911] xl:py-2 2xl:py-3 hover:opacity-80 transition rounded-[10px]">
                  <img src={IconPlay} alt="icon" className="inline w-6 mr-4" />
                  {translate('btn-playminigame-baner')}
                </button>
              </a>
              <a
                href="https://marketplace.wofm.io/mystery-box"
                rel="noopener noreferrer"
                target={'_blank'}
                className="block w-full"
              >
                <button className="w-full bg-[#FB5826] py-3 rounded-[10px]">
                  <img src={IconShopping} alt="icon" className="inline w-6 mr-4" />
                  {translate('btn-trade')}
                </button>
              </a>
              {/* <Popup
                modal
                trigger={
                  <button className="w-full bg-[#FB5826] xl:py-2 2xl:py-3 hover:opacity-80 transition rounded-[10px]">
                    <img src={IconShopping} alt="icon" className="inline w-6 mr-4" />
                    {translate('btn-trade')}
                  </button>
                }
              >
                {(close) => <PopupComingSoon close={close} />}
              </Popup> */}
            </div>
          </div>

          <div className="pt-3 text-white ">
            {/* <a href="https://cdn1.wofm.io/releases/wofm_testnet_1.0.zip" target={'_blank'} className="block w-full">
              <button className="w-full hover:opacity-80  transition bg-btn-download bg-no-repeat bg-cover xl:py-2 2xl:py-3  rounded-[10px]">
                <img src={IconDownload} alt="icon" className="inline w-5 mr-4" />
                {translate('btn-download-banner')}
              </button>
            </a> */}

            <Popup
              modal
              trigger={
                <button className="w-full bg-[#FB5826] xl:py-2 2xl:py-3 hover:opacity-80 transition rounded-[10px]">
                  <img src={IconShopping} alt="icon" className="inline w-6 mr-4" />
                  {translate('btn-download-banner')}
                </button>
              }
            >
              {/* {(close) => <PopupEventComingSoon close={close} />} */}
              {(close) => {
                return (
                  <div className="flex w-screen h-screen p-5 text-white bg-black/70">
                    <div className="relative w-1/3 m-auto">
                      <img src={ImgPopup} alt="" className="w-full rounded-[30px]" />
                      <div className="absolute top-0 left-0 w-full h-auto p-3">
                        <div className="flex justify-end w-full h-8 pr-1">
                          <IconClose className="w-4 md:w-6 fill-white hover:cursor-pointer" onClick={close}></IconClose>
                        </div>
                        <div className="flex flex-col w-full gap-4 ">
                          <Popup
                            modal
                            trigger={
                              <a href="javascript:;" className="block" rel="noopener noreferrer">
                                <img src={DownloadIos} alt="" className="h-[50px]  m-auto" />
                              </a>
                            }
                          >
                            {(close) => <PopupComingSoon close={close} />}
                          </Popup>

                          <a
                            href="https://cdn1.wofm.io/releases/wofm_android_prod_3.0.apk"
                            target={'_blank'}
                            className="block"
                            rel="noopener noreferrer"
                          >
                            <img src={DownloadAndroid} alt="" className="h-[50px]  m-auto" />
                          </a>
                          <a
                            href="https://cdn1.wofm.io/releases/wofm_pc_prod_3.0.zip"
                            target={'_blank'}
                            className="block"
                            rel="noopener noreferrer"
                          >
                            <img src={DownloadPC} alt="" className="h-[50px]  m-auto" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
