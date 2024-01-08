import React from 'react';
import IconPlay from '../assets/banner-top/icon_play.png';
import IconShopping from '../assets/banner-top/icon-shopping.png';
import ImgHero from '../assets/banner-top/hero.jpeg';
import ImgPopup from '../assets/banner-top/img-popup.png';
import translate from '../../i18n/translate';
import Popup from 'reactjs-popup';
import PopupComingSoon from './coming-soon';
import {
    ReactComponent as IconClose
} from '../assets/banner-top/xmark-solid.svg';
import DownloadIos from '../assets/download-ios.png';
import DownloadAndroid from '../assets/download-android.png';
import DownloadPC from '../assets/download-pc.png';

const PopupDownload = ({
    close
}) => {
    return ( <
        div className = "flex w-screen h-screen p-5 text-white bg-black/70" >
        <
        div className = "relative w-11/12 h-48 m-auto md:w-5/6" >
        <
        img src = {
            ImgPopup
        }
        alt = ""
        className = "w-full h-44" / >
        <
        div className = "absolute top-0 left-0 w-full p-3" >
        <
        div className = "flex justify-end w-full h-8 pr-1" >
        <
        IconClose className = "w-4 md:w-6 fill-white"
        onClick = {
            close
        } > < /IconClose> <
        /div> <
        p className = "px-8 text-justify md:pt-3" > {
            translate('btn-download-banner-event')
        } < /p> <
        /div> <
        /div> <
        /div>
    );
};

const BannerComponent = () => {
        return ( <
            div id = "home"
            className = "w-full bg-no-repeat bg-cover bg-mb-banner pt-[24%] md:pt-[16%]" >
            <
            div className = "w-[90%] m-auto py-3" >
            <
            p className = " text-[32px] md:text-[44px] uppercase font-bold font-UTM-Guanine bg-gradient-to-b from-[#D31616] to-[#D06D3D] text-transparent bg-clip-text text-center" > {
                translate('slogan-banner')
            } <
            /p> <
            p className = "mt-3 font-medium text-justify" > {
                translate('description-banner')
            } < /p> <
            div className = "w-full pt-4" >
            <
            p className = "text-[#D3333D] font-medium inline-block pr-4" > #WorldOfMasters < /p> <
            p className = "text-[#D3333D] font-medium inline-block pr-4" > #WOFM < /p> <
            p className = "text-[#D3333D] font-medium inline-block pr-4" > #FreeToPlay < /p> <
            p className = "text-[#D3333D] font-medium inline-block pr-4" > #PlayToEarn < /p> <
            /div>

            <
            div className = "w-full py-3 text-center bg-[#383838] rounded-[10px] mt-3" >
            <
            p className = "px-6 text-white truncate" >
            <
            a href = "https://bscscan.com/token/0x918f2fe1b50ECaeaeb95482669881eD42A978083"
            target = {
                '_blank'
            }
            rel = "noreferrer" >
            BSC 0x918f2fe1b50ECaeaeb95482669881eD42A978083 <
            /a> <
            /p> <
            /div>

            <
            div className = "w-full" >
            <
            div className = "flex gap-4 pt-3 text-white " >
            <
            a href = "https://minigame.wofm.io/"
            rel = "noopener noreferrer"
            target = {
                '_blank'
            }
            className = "block w-full" >
            <
            button className = "w-full bg-[#D72911] py-3 rounded-[10px]" >
            <
            img src = {
                IconPlay
            }
            alt = "icon"
            className = "inline w-6 mr-4" / > {
                translate('btn-playminigame-baner')
            } <
            /button> <
            /a> <
            a href = "https://marketplace.wofm.io/mystery-box"
            rel = "noopener noreferrer"
            target = {
                '_blank'
            }
            className = "block w-full" >
            <
            button className = "w-full bg-[#FB5826] py-3 rounded-[10px]" >
            <
            img src = {
                IconShopping
            }
            alt = "icon"
            className = "inline w-6 mr-4" / > {
                translate('btn-trade')
            } <
            /button> <
            /a> {
                /* <Popup
                              modal
                              trigger={
                                <button className="w-full bg-[#FB5826] py-3 rounded-[10px]">
                                  <img src={IconShopping} alt="icon" className="inline w-6 mr-4" />
                                  {translate('btn-trade')}
                                </button>
                              }
                            >
                              {(close) => <PopupComingSoon close={close} />}
                            </Popup> */
            } <
            /div> <
            /div> <
            div className = "pt-3 text-white " > {
                /* <a
                            href="https://cdn1.wofm.io/releases/wofm_testnet_1.0.zip"
                            rel="noopener noreferrer"
                            target={'_blank'}
                            className="block w-full"
                          >
                            <button className="w-full bg-btn-download bg-no-repeat bg-cover py-3 rounded-[10px]">
                              <img src={IconDownload} alt="icon" className="inline w-5 mr-4" />
                              {translate('btn-download-banner')}
                            </button>
                          </a> */
            }

            <
            Popup modal trigger = { <
                button className = "w-full bg-[#FB5826] py-3 rounded-[10px]" >
                <
                img src = {
                    IconShopping
                }
                alt = "icon"
                className = "inline w-6 mr-4" / > {
                    translate('btn-download-banner')
                } <
                /button>
            } >
            { /* {(close) => <PopupEventComingSoon close={close} />} */ } {
                (close) => {
                    return ( <
                        div className = "flex w-screen h-screen p-5 text-white bg-black/70" >
                        <
                        div className = "relative w-full m-auto" >
                        <
                        img src = {
                            ImgPopup
                        }
                        alt = ""
                        className = "w-full rounded-[30px]" / >
                        <
                        div className = "absolute top-0 left-0 w-full h-auto p-3" >
                        <
                        div className = "flex justify-end w-full h-4 pr-1" >
                        <
                        IconClose className = "w-3 md:w-6 fill-white"
                        onClick = {
                            close
                        } > < /IconClose> <
                        /div> <
                        div className = "flex flex-col w-full gap-2 " >
                        <
                        Popup modal trigger = { <
                            a href = "javascript:;"
                            className = "block"
                            rel = "noopener noreferrer" >
                            <
                            img src = {
                                DownloadIos
                            }
                            alt = ""
                            className = "h-[30px]  m-auto" / >
                            <
                            /a>
                        } >
                        {
                            (close) => < PopupComingSoon close = {
                                close
                            }
                            />} <
                            /Popup>

                            <
                            a
                            href = "https://cdn1.wofm.io/releases/wofm_android_prod_3.0.apk"
                            target = {
                                '_blank'
                            }
                            className = "block"
                            rel = "noopener noreferrer" >
                            <
                            img src = {
                                DownloadAndroid
                            }
                            alt = ""
                            className = "h-[30px]  m-auto" / >
                            <
                            /a> <
                            a
                            href = "https://cdn1.wofm.io/releases/wofm_pc_prod_3.0.zip"
                            target = {
                                '_blank'
                            }
                            className = "block"
                            rel = "noopener noreferrer" >
                            <
                            img src = {
                                DownloadPC
                            }
                            alt = ""
                            className = "h-[30px]  m-auto" / >
                            <
                            /a> <
                            /div> <
                            /div> <
                            /div> <
                            /div>
                        );
                    }
                } <
                /Popup> <
                /div> <
                /div> <
                img src = {
                    ImgHero
                }
                alt = "" / >
                    <
                    /div>
            );
        };

        export default BannerComponent;