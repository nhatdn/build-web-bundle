import React from 'react';
import Slider from 'react-slick';
import SlickWrapper from '../../components/style-slick';
import ItemEvan from '../assets/partner/evangelion.png';
import ItemRkei from '../assets/partner/rkei.png';
import ItemCabo from '../assets/partner/cabo.png';
import IconNext from '../assets/partner/icon-next.png';
import IconPrev from '../assets/partner/icon-prev.png';

import Item1 from '../assets/partner/1.png';
import Item2 from '../assets/partner/2.png';
import Item3 from '../assets/partner/3.png';
import Item4 from '../assets/partner/4.png';
import Item5 from '../assets/partner/5.png';
import Item6 from '../assets/partner/6.png';
import Item7 from '../assets/partner/7.png';
import Item8 from '../assets/partner/8.png';
import Item9 from '../assets/partner/9.png';
import Item10 from '../assets/partner/10.png';
import Item11 from '../assets/partner/11.png';
import Item12 from '../assets/partner/12.png';
import Item13 from '../assets/partner/13.png';
import Item14 from '../assets/partner/14.png';
import Item15 from '../assets/partner/15.png';
import Item16 from '../assets/partner/16.png';

const ArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
}) => ( <
    button { ...props
    }
    className = "absolute prev top-1/2 -right-10"
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
    className = "absolute next top-1/2 -left-10"
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

const PartnerComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: < ArrowLeft / > ,
        prevArrow: < ArrowRight / > ,
        initialSlide: 0,
        customPaging: function() {
            return <div className = "w-[7px] m-auto h-[7px] rounded bg-white mt-2 hover:bg-[#ffb800]" > < /div>;
        },
        dotsClass: 'slick-dots slick-thumb mobile'
    };
    return ( <
        div id = "partner"
        className = "w-full bg-no-repeat bg-cover bg-mb-partner" >
        <
        div className = "w-full p-3 pt-4 sm:p-6" >
        <
        p className = " text-[44px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" >
        BACKER <
        /p>

        <
        div className = "grid w-full grid-cols-1 mt-8 text-center md:grid-cols-3 sm:grid-cols-2" >
        <
        img src = {
            ItemEvan
        }
        alt = ""
        className = "w-[220px] lg:w-[300px] m-auto py-3" / >
        <
        img src = {
            ItemRkei
        }
        alt = ""
        className = "w-[220px] lg:w-[300px] m-auto py-3" / >
        <
        img src = {
            ItemCabo
        }
        alt = ""
        className = "w-[220px] lg:w-[300px] m-auto py-3" / >
        <
        /div> <
        /div> <
        div className = "w-full p-3 pt-8 pb-12 md:pt-16 sm:p-6" >
        <
        p className = " text-[44px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" >
        MARKETING PARTNERS <
        /p>

        <
        div className = "my-12" >
        <
        SlickWrapper className = "px-14" >
        <
        div >
        <
        Slider { ...settings
        } >
        <
        div className = "space-y-4" >
        <
        img src = {
            Item1
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item2
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item3
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item4
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        /div> <
        div className = "space-y-4" >
        <
        img src = {
            Item5
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item10
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item7
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item8
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        /div> <
        div className = "space-y-4" >
        <
        img src = {
            Item9
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item11
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item12
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item13
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        /div> <
        div className = "space-y-4" >
        <
        img src = {
            Item14
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item15
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        img src = {
            Item16
        }
        alt = ""
        className = "h-[110px] md:h-[130px] m-auto" / >
        <
        /div> <
        /Slider> <
        /div> <
        /SlickWrapper> <
        /div> <
        /div> <
        /div>
    );
};

export default PartnerComponent;