import React from 'react';
import ImgRoadmap from '../assets/roadmap/info-roadmap.png';
import translate from '../../i18n/translate';

const RoadmapComponent = () => {
    return ( <
        div id = "roadmap"
        className = "w-full bg-no-repeat bg-cover bg-mb-roadmap" >
        <
        div className = "w-full p-3 pt-4 pb-12 sm:p-6" >
        <
        p className = " text-[44px] font-bold uppercase font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center" > {
            translate('roadmap-slogan')
        } <
        /p>

        <
        img src = {
            ImgRoadmap
        }
        alt = "Roadmap"
        className = "my-8 " / >
        <
        /div> <
        /div>
    );
};

export default RoadmapComponent;