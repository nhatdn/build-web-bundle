import React, {
    ReactComponent,
    useRef
} from 'react';
import Slider from 'react-slick';
import SlickWrapper from '../../components/style-slick';
import IconNext from '../assets/addictive-playgame/icon-next.png';
import IconPrev from '../assets/addictive-playgame/icon-prev.png';
import Card_1 from '../assets/addictive-playgame/card_1.png';
import Card_1_no_hero from '../assets/addictive-playgame/card_1_no_hero.png';
import Card_2 from '../assets/addictive-playgame/card_2.png';
import Card_3 from '../assets/addictive-playgame/card_3.png';
import Card_4 from '../assets/addictive-playgame/card_4.png';
import Card_5 from '../assets/addictive-playgame/card_5.png';
import Card_6 from '../assets/addictive-playgame/card_6.png';
import Card_2_mb from '../assets/addictive-playgame/card_2_mb.png';
import Card_3_mb from '../assets/addictive-playgame/card_3_mb.png';
import Card_4_mb from '../assets/addictive-playgame/card_4_mb.png';
import Card_5_mb from '../assets/addictive-playgame/card_5_mb.png';
import Card_6_mb from '../assets/addictive-playgame/card_6_mb.png';
import VideoHero from '../assets/addictive-playgame/hero-video.mp4';
import VideoMap from '../assets/addictive-playgame/map-video.webm';
import VideoPvE from '../assets/addictive-playgame/pve-video.webm';
import VideoPvP from '../assets/addictive-playgame/pvp-video.webm';
import VideoBountyHunter from '../assets/addictive-playgame/bounty-hunter-video.webm';
import VideoBossBattle from '../assets/addictive-playgame/boss-battle-video.webm';
import translate from '../../i18n/translate';
import {
    ReactComponent as IconPlay
} from '../assets/play-solid.svg';

const ArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
}) => ( <
    button { ...props
    }
    className = "absolute prev -bottom-9 md:-bottom-14 right-2"
    aria - hidden = "true"
    aria - disabled = {
        currentSlide === 0 ? true : false
    } >
    <
    img src = {
        IconNext
    }
    alt = "prev"
    className = "w-[30px] hover:scale-110 hover:duration-300" / >
    <
    /button>
);
const ArrowRight = ({
    currentSlide,
    slideCount,
    ...props
}) => ( <
    button { ...props
    }
    className = "absolute next -bottom-9 md:-bottom-14 left-2"
    aria - hidden = "true"
    aria - disabled = {
        currentSlide === slideCount - 1 ? true : false
    } >
    <
    img src = {
        IconPrev
    }
    alt = "next"
    className = "w-[30px] hover:scale-110 hover:duration-300" / >
    <
    /button>
);

const PlayVideo = ({
    srcVideo
}) => {
    return ( <
        div className = {
            'relative w-full'
        } >
        <
        video autoPlay playsInline loop muted className = "w-full  rounded-xl" >
        <
        source src = {
            srcVideo
        }
        type = "video/mp4" / >
        <
        /video> <
        /div>
    );
};

const AddictiveGameplayComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: < ArrowLeft / > ,
        prevArrow: < ArrowRight / > ,
        initialSlide: 0,
        customPaging: function() {
            return <div className = "w-[20px] m-auto h-[4px] rounded bg-white mt-2 sm:mt-6 hover:bg-[#ffb800]" > < /div>;
        },
        dotsClass: 'slick-dots slick-thumb mobile'
    };
    return ( <
        div id = "gameplays"
        className = "w-full bg-no-repeat bg-cover bg-mb-playgame" >
        <
        div className = "w-full p-3 pt-4 sm:p-6" >
        <
        p className = "text-[44px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" >
        ADDICTIVE GAMEPLAY <
        /p> <
        /div> <
        div className = "w-full pb-8" >
        <
        div className = "my-12 slide-playgame" >
        <
        SlickWrapper >
        <
        div >
        <
        Slider { ...settings
        } >
        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_1
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_1_no_hero
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white text" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10 mt-4 mb-3 md:mb-9" > {
            translate('heroes-slogan')
        } <
        /p> <
        div className = "w-1/2 h-auto pr-2 float-left" >
        <
        iframe src = "https://www.youtube.com/embed/7-J-8UGxd8s"
        title = "YouTube video player"
        className = "m-auto w-full max-h-32 "
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-[13px] md:text-lg text font-medium" > {
            translate('dcs-Heroes-line-1')
        } <
        /span> <
        span className = "text-[13px] md:text-lg text inline-block font-medium pt-2" > {
            translate('dcs-Heroes-line-2')
        } <
        /span> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_2
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_2_mb
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10 mt-4 mb-3 md:mb-9" > {
            translate('adventure-Maps-slogan')
        } <
        /p> <
        div className = "w-1/2 pr-2 float-left" >
        <
        iframe className = "m-auto w-full"
        src = "https://www.youtube.com/embed/QMqLefQPG8w"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-sm md:text-lg font-medium" > {
            translate('dcs-Adventure-Maps')
        } < /span> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_3
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_3_mb
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10  mt-4 mb-3 md:mb-9" > {
            translate('PvE-slogan')
        } <
        /p> <
        div className = "w-1/2 pr-2 float-left" >
        <
        iframe className = "m-auto w-full"
        src = "https://www.youtube.com/embed/Dq_ht6f0ZS8"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-sm md:text-lg font-medium" > {
            translate('dcs-PvE')
        } < /span> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_4
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_4_mb
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10 mt-4 mb-3 md:mb-9" > {
            translate('PvP-slogan')
        } <
        /p> <
        div className = "w-1/2 pr-2 float-left" >
        <
        iframe className = "m-auto w-full"
        src = "https://www.youtube.com/embed/jREHLgnLbxA"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-sm md:text-lg font-medium" > {
            translate('dcs-PvP')
        } < /span> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_5
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_5_mb
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10 mt-4 mb-3 md:mb-9" > {
            translate('Bounty-Hunters-slogan')
        } <
        /p> <
        div className = "w-1/2 pr-2 float-left" >
        <
        iframe className = "m-auto w-full"
        src = "https://www.youtube.com/embed/7HiwCjyPZAw"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-sm md:text-lg font-medium" > {
            translate('dcs-Bounty-Hunters')
        } < /span> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative" >
        <
        div className = "w-full md:block hidden" >
        <
        img src = {
            Card_6
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "w-full block md:hidden" >
        <
        img src = {
            Card_6_mb
        }
        alt = ""
        className = "w-full px-2 m-auto" / >
        <
        /div> <
        div className = "absolute top-0 md:top-12 left-4 w-full" >
        <
        div className = "pl-5 pr-11 text-white" >
        <
        div className = "w-full " >
        <
        p className = "md:text-center uppercase text-2xl md:text-4xl font-extrabold Fira-Sans-normal leading-10 mt-4 mb-3 md:mb-9" > {
            translate('Boss-Battle-slogan')
        } <
        /p> <
        div className = "w-1/2 pr-2 float-left" >
        <
        iframe className = "m-auto w-full"
        src = "https://www.youtube.com/embed/z1v7DSf0pRg"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        < /iframe> <
        /div> <
        span className = "text-sm md:text-lg font-medium" > {
            translate('dcs-Boss-Battle')
        } < /span> <
        /div> <
        /div> <
        /div> <
        /div> <
        /Slider> <
        /div> <
        /SlickWrapper> <
        /div> <
        /div> <
        /div>
    );
};

export default AddictiveGameplayComponent;