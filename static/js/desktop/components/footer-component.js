import React from 'react';
import Logo from '../assets/footer/logo.png';
import IconTelegram from '../assets/footer/tele.png';
import IconFb from '../assets/footer/fb.png';
import IconReddit from '../assets/footer/reddit.png';
import IconTwiter from '../assets/footer/twiter.png';
import IconYoutube from '../assets/footer/youtube.png';
import IconDiscord from '../assets/footer/discord.png';
import IconAppStore from '../assets/footer/appstore.png';
import IconGg from '../assets/footer/gg.png';
import IconWeb from '../assets/footer/web.png';
import IconAudit from '../assets/footer/audit.png';
import FagComponent from './fag-component';
import ImgPopup from '../assets/banner/img-popup.png';
import Popup from 'reactjs-popup';
import {
    ReactComponent as IconClose
} from '../assets/banner/xmark-solid.svg';
import translate from '../../i18n/translate';

const PopupComingSoon = ({
    close
}) => {
    return ( <
        div className = "flex w-screen h-screen p-5 text-white bg-black/70" >
        <
        div className = "relative w-2/5 h-48 m-auto" >
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
        IconClose className = "w-4 fill-white hover:cursor-pointer"
        onClick = {
            close
        } > < /IconClose> <
        /div> <
        p className = "px-8 text-3xl font-medium text-center md:pt-3" > {
            translate('coming-soon')
        } < /p> <
        /div> <
        /div> <
        /div>
    );
};

const FooterComponent = () => {
        return ( <
            div className = "flex flex-col w-full min-h-[715px] h-screen" >
            <
            FagComponent key = {
                'faq'
            }
            className = "" / >

            <
            div className = "bg-[#000] w-full flex-grow-[2] flex items-center" >
            <
            div className = "xl:w-full 2xl:w-[1280px] xl:px-12 m-auto px-4 py-12" >
            <
            div className = "flex items-center justify-center gap-14" >
            <
            img src = {
                Logo
            }
            alt = "logo"
            className = "w-48" / > {
                /* <div className="flex-none w-56 h-14">
                              <div className="flex flex-col ">
                              </div>
                            </div> */
            } <
            div className = "w-full grow h-44" >
            <
            div className = "flex items-center w-full mx-auto ml-10" >
            <
            div className = "w-1/3 text-white" >
            <
            a className = "font-semibold transition group hover:text-yellow-100"
            href = "https://t.me/WofMcommunity"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer" >
            <
            img src = {
                IconTelegram
            }
            alt = "Telegram"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Telegram <
            /a> <
            /div> <
            div className = "w-1/3 text-white" >
            <
            a className = "font-semibold transition group hover:text-yellow-100"
            href = "https://www.facebook.com/wofm.io"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer" >
            <
            img src = {
                IconFb
            }
            alt = "Fanpage"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Facebook <
            /a> <
            /div> <
            div className = "w-1/3 text-white" >
            <
            a href = "https://www.reddit.com/r/WorldofMasters/"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "font-semibold transition group hover:text-yellow-100" >
            <
            img src = {
                IconReddit
            }
            alt = "Reddit"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Reddit <
            /a> <
            /div> <
            /div>

            <
            div className = "flex items-center w-full mx-auto mt-3 ml-10" >
            <
            div className = "w-1/3 text-white" >
            <
            a className = "font-semibold transition group hover:text-yellow-100"
            href = "https://twitter.com/wofm_io"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer" >
            <
            img src = {
                IconTwiter
            }
            alt = "Twitter"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Twiter <
            /a> <
            /div> <
            div className = "w-1/3 text-white" >
            <
            a className = "font-semibold transition group hover:text-yellow-100"
            href = "https://www.youtube.com/c/WorldOfMasters1"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer" >
            <
            img src = {
                IconYoutube
            }
            alt = "Youtube"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Youtube <
            /a> <
            /div> <
            div className = "w-1/3 text-white" >
            <
            a className = "font-semibold transition group hover:text-yellow-100"
            href = "http://discord.io/worldofmasters"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer" >
            <
            img src = {
                IconDiscord
            }
            alt = "Discord"
            className = "w-[23px] h-[23px] object-contain inline-block mr-3 group-hover:scale-125 duration-300" /
            >
            Discord <
            /a> <
            /div> <
            /div>

            <
            div className = "flex justify-center w-full gap-8 pt-8 m-auto" >
            <
            Popup modal trigger = { < img src = {
                    IconAppStore
                }
                alt = "App store"
                className = "h-10" / >
            } > {
                (close) => < PopupComingSoon close = {
                    close
                }
                />} <
                /Popup> <
                a
                href = "https://cdn1.wofm.io/releases/wofm_android_prod_3.0.apk"
                target = {
                    '_blank'
                }
                className = "block"
                rel = "noopener noreferrer" >
                <
                img src = {
                    IconGg
                }
                alt = ""
                className = "h-10 m-auto" / >
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
                    IconWeb
                }
                alt = ""
                className = "h-10 m-auto" / >
                <
                /a> <
                /div> <
                /div> <
                img src = {
                    IconAudit
                }
                alt = "Audit"
                className = "w-48 m-auto" / >

                {
                    /* <div className="justify-center flex-none w-72 h-14">
                                </div> */
                } <
                /div> <
                p className = "mt-6 text-center text-neutral-400" >
                Contact us: < span className = "text-slate-100" > info @wofm.io < /span> <
                    /p> <
                    /div> <
                    /div> <
                    /div>
            );
        };

        export default FooterComponent;