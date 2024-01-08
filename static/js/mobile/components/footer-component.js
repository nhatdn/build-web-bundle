import React from 'react';
import Logo from '../assets/footer/logo.png';
import LogoAudit from '../assets/footer/audit.png';
import IconTelegram from '../assets/footer/tele.png';
import IconFacebook from '../assets/footer/fb.png';
import IconReddit from '../assets/footer/reddit.png';
import IconTwiter from '../assets/footer/twiter.png';
import IconYoutube from '../assets/footer/youtube.png';
import IconDiscord from '../assets/footer/discord.png';
import IconAppStore from '../assets/footer/appstore.png';
import IconGG from '../assets/footer/gg.png';
import IconWeb from '../assets/footer/web.png';
import Popup from 'reactjs-popup';
import PopupComingSoon from './coming-soon';

const FooterComponent = () => {
        return ( <
            div className = "w-full p-3 bg-black" >
            <
            div className = "flex w-full py-3" >
            <
            div className = "flex-grow-[1] px-3" >
            <
            img src = {
                Logo
            }
            alt = "Logo"
            className = "m-auto w-[110px] md:w-[250px]" / >
            <
            /div> <
            div className = "flex-grow-[1] px-3" >
            <
            img src = {
                LogoAudit
            }
            alt = "Logo auddit"
            className = "m-auto w-[110px] md:w-[250px]" / >
            <
            /div> <
            /div>

            <
            div className = "flex w-full pt-4 pb-6" >
            <
            div className = "flex-grow-[1] px-2 space-y-4" >
            <
            a href = "https://t.me/WofMcommunity"
            target = "_blank"
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconTelegram
            }
            alt = "Telegram"
            className = "h-[20px] md:h-8 m-auto" / >
            <
            /a> <
            a href = "https://twitter.com/wofm_io"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconTwiter
            }
            alt = "Twiter"
            className = "h-[20px] md:h-8 m-auto" / >
            <
            /a> <
            /div> <
            div className = "flex-grow-[1] px-2 space-y-4" >
            <
            a href = "https://www.facebook.com/wofm.io"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconFacebook
            }
            alt = "Fanpage"
            className = "h-[22px] md:h-9 m-auto" / >
            <
            /a> <
            a href = "https://www.youtube.com/c/WorldOfMasters1"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconYoutube
            }
            alt = "Youtube"
            className = "h-[18px]  md:h-7 m-auto" / >
            <
            /a> <
            /div> <
            div className = "flex-grow-[1] px-2 space-y-4" >
            <
            a href = "https://www.reddit.com/r/WorldofMasters/ "
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconReddit
            }
            alt = "Reddit"
            className = "h-[25px] md:h-10 m-auto" / >
            <
            /a> <
            a href = "http://discord.io/worldofmasters"
            target = {
                '_blank'
            }
            rel = "noopener noreferrer"
            className = "block" >
            <
            img src = {
                IconDiscord
            }
            alt = "Discord"
            className = "h-[20px] md:h-8 m-auto" / >
            <
            /a> <
            /div> <
            /div>

            <
            div className = "flex justify-center w-full p-3 space-x-4 md:pt-5" >
            <
            Popup modal trigger = { < img src = {
                    IconAppStore
                }
                alt = "App store"
                className = "h-9 md:h-20" / >
            } > {
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
                    IconGG
                }
                alt = ""
                className = "h-9 md:h-20" / >
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
                className = "h-9 md:h-20" / >
                <
                /a> <
                /div> <
                p className = "mt-6 mb-3 text-center text-neutral-400" >
                Contact us: < span className = "text-slate-100" > info @wofm.io < /span> <
                    /p> <
                    /div>
            );
        };

        export default FooterComponent;