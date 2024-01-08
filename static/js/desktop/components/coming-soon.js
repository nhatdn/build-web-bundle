import React from 'react';
import ImgPopup from '../assets/img-popup.png';
import translate from '../../i18n/translate';
import {
    ReactComponent as IconClose
} from '../assets/xmark-solid.svg';

const PopupComingSoon = ({
    close
}) => {
    return ( <
        div className = "w-screen h-screen p-5 bg-black/70 flex text-white" >
        <
        div className = "w-1/3  m-auto relative" >
        <
        img src = {
            ImgPopup
        }
        alt = ""
        className = "w-full h-44" / >
        <
        div className = "absolute top-0 left-0 w-full p-3" >
        <
        div className = "w-full flex justify-end h-8 pr-1" >
        <
        IconClose className = "w-4 md:w-6  fill-white hover:cursor-pointer"
        onClick = {
            close
        } > < /IconClose> <
        /div> <
        p className = "px-8 text-center text-3xl font-medium md:pt-3" > {
            translate('coming-soon')
        } < /p> <
        /div> <
        /div> <
        /div>
    );
};
export default PopupComingSoon;