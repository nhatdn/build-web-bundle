import React from 'react';
import Slider from 'react-slick';
import SlickWrapper from '../../components/style-slick';
import IconNext from '../assets/lastest-news/icon-next.png';
import IconPrev from '../assets/lastest-news/icon-prev.png';
import IconPlus from '../assets/lastest-news/plus.png';
import Icon_1 from '../assets/lastest-news/icon_1.png';
import Icon_2 from '../assets/lastest-news/icon_2.png';
import Icon_3 from '../assets/lastest-news/icon_3.png';
import Icon_4 from '../assets/lastest-news/icon_4.png';
import Icon_5 from '../assets/lastest-news/icon_5.png';
import Icon_6 from '../assets/lastest-news/icon_6.png';
import translate from '../../i18n/translate';
import Post_1 from '../assets/lastest-news/post_1_1.png';
import Post_2 from '../assets/lastest-news/post_8_1.png';
import Post_3 from '../assets/lastest-news/post_3_1.png';
import Post_4 from '../assets/lastest-news/post_4_1.png';
import Post_5 from '../assets/lastest-news/post_5_1.jpeg';
import Post_6 from '../assets/lastest-news/post_6_1.png';
import Post_7 from '../assets/lastest-news/post_7_1.png';
import Post_8 from '../assets/lastest-news/post_8_1.png';

const ArrayLastestNews = [{
        id: 1,
        image: Post_1,
        title: 'How to join World of Masters IDO on GamesPad',
        content: 'GamesPad platform is designed to make participating in deals on GamesPad simple and easy.',
        href: 'https://worldofmasters.medium.com/how-to-join-world-of-masters-ido-on-gamespad-101910543b5'
    },
    {
        id: 2,
        image: Post_2,
        title: 'How to Join World of Masters IDO on Bullperk',
        content: 'BullPerks is known as the fairest and most community dedicated decentralized launchpad',
        href: 'https://worldofmasters.medium.com/how-to-join-world-of-masters-ido-on-bullperk-81fbe23ba01e'
    },
    {
        id: 3,
        image: Post_3,
        title: 'How to Join World of Masters IDO on Bullperk',
        content: 'BullPerks is known as the fairest and most community dedicated decentralized launchpad',
        href: 'https://worldofmasters.medium.com/how-to-join-world-of-masters-ido-on-bullperk-81fbe23ba01e'
    },
    {
        id: 4,
        image: Post_4,
        title: 'Important Announcement: Claiming Reward from World of Masters Event',
        content: 'Congratulations to all the winners of our events so far. Thank you for your support by joining our Events: Airdrops, Discord, and many more',
        href: 'https://worldofmasters.medium.com/important-announcement-claiming-reward-from-world-of-masters-event-e9ad489d68ad'
    },
    {
        id: 5,
        image: Post_5,
        title: 'World of Masters Jumbo June: Are you ready for the hype?',
        content: 'It’s been a really tough time for all of us, but it’s all over 🥳 Let’s welcome the extremely interesting information that you have been waiting for for a long time',
        href: 'https://worldofmasters.medium.com/world-of-masters-jumbo-june-are-you-ready-for-the-hype-5dd22748a05a'
    },
    {
        id: 6,
        image: Post_6,
        title: 'How to Join World of Masters IDO on DODO',
        content: 'Join the Deal: https://app.dodoex.io/cp/join/0x6a37910781123e5b3975ebf3740551183d96a0a1?network=bsc-mainnet',
        href: 'https://worldofmasters.medium.com/how-to-join-world-of-masters-ido-on-dodo-632b27be09bc'
    },
    {
        id: 7,
        image: Post_7,
        title: 'Treasure Hunting: Hype up Open Beta with 1 BTC',
        content: 'Hello Masters. Have you ever heard of 1 BTC as the reward in World of Masters? We’re sure you did ',
        href: 'https://worldofmasters.medium.com/treasure-hunting-hype-up-open-cdc53b75fc01'
    },
    {
        id: 7,
        image: Post_8,
        title: 'World of Masters Open Beta Events',
        content: 'The Jumbo Junes will continue with the new in-game events for all Masters, as the welcome to the world of World of Masters',
        href: 'https://worldofmasters.medium.com/world-of-masters-open-beta-events-8107376f57f7'
    }
];

const ArraySliderAutoLine1 = [{
        imageItem: Icon_1,
        userName: 'name-HLC',
        comment: 'cmt-HLC-Gaming'
    },
    {
        imageItem: Icon_2,
        userName: 'name-Crypto',
        comment: 'cmt-Crypto-Fomo'
    },
    {
        imageItem: Icon_3,
        userName: 'name-xplays-id',
        comment: 'cmt-Xplays-id'
    },
    {
        imageItem: Icon_4,
        userName: 'name-Myka',
        comment: 'cmt-Myka-Lumba-TV'
    },
    {
        imageItem: Icon_5,
        userName: 'name-Ventures',
        comment: 'cmt-Ventures'
    },
    {
        imageItem: Icon_6,
        userName: 'name-Evangelion',
        comment: 'cmt-Evangelion-Capital'
    }
];

const ArraySliderAutoLine2 = [{
        imageItem: Icon_4,
        userName: 'name-Myka',
        comment: 'cmt-Myka-Lumba-TV'
    },
    {
        imageItem: Icon_1,
        userName: 'name-HLC',
        comment: 'cmt-HLC-Gaming'
    },
    {
        imageItem: Icon_5,
        userName: 'name-Ventures',
        comment: 'cmt-Ventures'
    },
    {
        imageItem: Icon_2,
        userName: 'name-Crypto',
        comment: 'cmt-Crypto-Fomo'
    },
    {
        imageItem: Icon_6,
        userName: 'name-Evangelion',
        comment: 'cmt-Evangelion-Capital'
    },
    {
        imageItem: Icon_3,
        userName: 'name-xplays-id',
        comment: 'cmt-Xplays-id'
    }
];

const ItemSliderAuto = ({
    imageItem,
    userName,
    comment
}) => {
    return ( <
        div className = "ticker__item" >
        <
        div className = "bg-[#A62F26] py-1 px-1 mr-4 rounded-[30px] w-auto flex" >
        <
        div className = "bg-black/30 rounded-[30px] flex pr-3" >
        <
        img src = {
            imageItem
        }
        alt = "icon"
        className = "w-[30px] h-[30px]" / >
        <
        span className = "pt-[3px] pl-2 text-white" > {
            translate(userName)
        } < /span> <
        /div> <
        span className = "pt-[3px] pl-2 text-white" > {
            translate(comment)
        } < /span> <
        /div> <
        /div>
    );
};

const ItemSlideNews = ({
    href,
    img,
    title,
    content
}) => {
    return ( <
        div className = "px-3 text-white font-Fira-Sans-italic" >
        <
        a href = {
            href
        }
        rel = "noopener noreferrer"
        target = {
            '_blank'
        } >
        <
        img src = {
            img
        }
        alt = ""
        className = "rounded-lg h-[143px] w-full m-auto object-cover object-center" / >
        <
        p className = "py-4 text-xl font-medium" > {
            title
        } < /p> <
        p className = "pb-4 text-base " > {
            content
        } < /p> <
        /a> <
        /div>
    );
};

const ItemEventNew = ({
    href,
    img,
    title,
    content
}) => {
    return ( <
        div className = "p-8 md:flex" >
        <
        div className = "md:w-2/6" >
        <
        img src = {
            img
        }
        alt = ""
        className = "w-full m-auto rounded-xl" / >
        <
        /div> <
        div className = "md:w-4/6 md:pl-4" >
        <
        a href = {
            href
        }
        rel = "noopener noreferrer"
        target = {
            '_blank'
        } >
        <
        p className = "my-3 text-xl font-medium" > {
            title
        } < /p> <
        p className = "mt-2 text-base " > {
            translate(content)
        } < /p> <
        /a> <
        /div> <
        /div>
    );
};

const ArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
}) => ( <
    button { ...props
    }
    className = "absolute prev top-[20%] -right-10"
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
    className = "absolute next top-[20%] -left-10"
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

const ListEvent = () => {
    return ( <
        >
        <
        div className = "w-full px-5 pt-5" >
        <
        ItemEventNew key = {
            ArrayLastestNews[0].id
        }
        href = {
            ArrayLastestNews[0].href
        }
        img = {
            ArrayLastestNews[0].image
        }
        title = {
            ArrayLastestNews[0].title
        }
        content = {
            ArrayLastestNews[0].content
        }
        /> <
        div className = "w-full h-[2px] bg-[#FF9593]/40 px-8" > < /div> <
        ItemEventNew key = {
            ArrayLastestNews[1].id
        }
        href = {
            ArrayLastestNews[1].href
        }
        img = {
            ArrayLastestNews[1].image
        }
        title = {
            ArrayLastestNews[1].title
        }
        content = {
            ArrayLastestNews[1].content
        }
        /> <
        /div>

        <
        div className = "w-full pb-4 text-center" >
        <
        a href = "https://worldofmasters.medium.com/"
        rel = "noopener noreferrer"
        target = {
            '_blank'
        } >
        <
        button className = "rounded-[10px] py-3 min-w-[170px] bg-[#8A1D1B] border-[#C44D4A] border-solid border-[1px]" > {
            translate('see-more')
        } <
        img src = {
            IconPlus
        }
        alt = "add"
        className = "inline-block w-6 ml-3" / >
        <
        /button> <
        /a> <
        /div> <
        />
    );
};

const SliderLastestNewsAuto = ({
    slideIndex
}) => {
    if (slideIndex === 1) {
        return ( <
            div className = "w-full overflow-hidden" >
            <
            div className = "ticker animation-60" > {
                ArraySliderAutoLine1.map((item) => {
                    return ( <
                        ItemSliderAuto key = {
                            item.userName
                        }
                        imageItem = {
                            item.imageItem
                        }
                        userName = {
                            item.userName
                        }
                        comment = {
                            item.comment
                        }
                        />
                    );
                })
            } <
            /div> <
            /div>
        );
    } else {
        return ( <
            div className = "w-full overflow-hidden" >
            <
            div className = "ticker animation-90" > {
                ArraySliderAutoLine2.map((item) => {
                    return ( <
                        ItemSliderAuto key = {
                            item.userName
                        }
                        imageItem = {
                            item.imageItem
                        }
                        userName = {
                            item.userName
                        }
                        comment = {
                            item.comment
                        }
                        />
                    );
                })
            } <
            /div> <
            /div>
        );
    }
};

const SliderBannerNew = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 768,
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
            return <div className = "w-[7px] m-auto h-[7px] rounded bg-white  hover:bg-[#ffb800]" > < /div>;
        },
        dotsClass: 'slick-dots slick-thumb mobile'
    };
    return ( <
        SlickWrapper className = "" >
        <
        div >
        <
        Slider { ...settings
        } > {
            ArrayLastestNews.map((item) => {
                if (item.id > 2) {
                    return ( <
                        ItemSlideNews key = {
                            item.id
                        }
                        href = {
                            item.href
                        }
                        img = {
                            item.image
                        }
                        title = {
                            item.title
                        }
                        content = {
                            item.content
                        }
                        />
                    );
                }
            })
        } <
        /Slider> <
        /div> <
        /SlickWrapper>
    );
};

const LastestNewsComponent = () => {
    return ( <
        div id = "news"
        className = "w-full text-white bg-no-repeat bg-cover bg-mb-lastest-news font-Fira-Sans-italic" >
        <
        div className = "w-full bg-[#2F0106]/[0.35]" >
        <
        div className = "pt-2" >
        <
        SliderLastestNewsAuto slideIndex = {
            1
        }
        /> <
        /div> <
        div className = "pb-2" >
        <
        SliderLastestNewsAuto slideIndex = {
            2
        }
        /> <
        /div> <
        /div> <
        div className = "w-full pt-4 sm:p-6" >
        <
        p className = " text-[44px] uppercase font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" > {
            translate('latest-news-slogan')
        } <
        /p> <
        div className = "w-full bg-[#5F110F]/40 rounded-xl border-[1px] border-[#E00000] border-solid mt-6 py-6 px-10 slider-news" >
        <
        SliderBannerNew / >
        <
        /div>

        <
        ListEvent / >
        <
        /div> <
        /div>
    );
};

export default LastestNewsComponent;