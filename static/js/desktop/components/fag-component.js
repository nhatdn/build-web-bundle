import React from 'react';
import icon_1 from '../assets/fag/icon_1.png';
import icon_2 from '../assets/fag/icon_2.png';
import icon_3 from '../assets/fag/icon_3.png';
import icon_4 from '../assets/fag/icon_4.png';
import ImageLazy from '../../components/imageLazyLoad';
import translate from '../../i18n/translate';

const FAQS = [{
        image: icon_1,
        title: 'fag-1',
        href: 'https://wofm.gitbook.io/whitepaper/user-instruction/creating-an-account'
    },
    {
        image: icon_2,
        title: 'fag-2',
        href: 'https://wofm.gitbook.io/whitepaper/game-instruction/'
    },
    {
        image: icon_3,
        title: 'fag-4',
        href: 'https://forms.gle/Pav7dgJxt3baW1Ja8'
    },
    {
        image: icon_4,
        title: 'fag-3',
        href: 'https://wofm.gitbook.io/whitepaper/metamask-instruction/how-to-create-metamask-wallet'
    }
];

const ItemFaq = ({
    imageItem,
    hrefItem,
    titleItem
}) => {
    return ( <
        a href = {
            hrefItem
        }
        target = "_blank "
        className = "block" >
        <
        div className = "m-h-14 bg-gradient-to-b from-red-600 to-red-800 border-[#C90202] rounded-[10px] p-4 flex justify-start items-center" >
        <
        ImageLazy alt = "icon"
        image = {
            `${imageItem}`
        }
        className = "h-[75px]" / >
        <
        span className = "pl-4 text-base font-bold text-left text-white" > {
            translate(titleItem)
        } < /span> <
        /div> <
        /a>
    );
};
const FagComponent = () => {
    return ( <
        div className = "w-full flex-grow-[7] bg-no-repeat bg-cover bg-fag" >
        <
        div className = "w-[85%] 2xl:w-[1280px] h-full bg-fag-content bg-no-repeat bg-contain m-auto bg-right-bottom flex items-center pl-5 2xl:pl-0" >
        <
        div className = "w-1/2 2xl:w-[45%] text-center" >
        <
        p className = " text-[48px] font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" > {
            translate('fag-slogan')
        } <
        /p> <
        div className = "grid w-full grid-cols-2 gap-4 mt-8" > {
            FAQS.map((item) => {
                return <ItemFaq imageItem = {
                    item.image
                }
                hrefItem = {
                    item.href
                }
                titleItem = {
                    item.title
                }
                />;
            })
        } <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default FagComponent;