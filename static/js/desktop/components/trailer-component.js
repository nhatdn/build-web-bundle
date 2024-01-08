import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import Trailer from '../assets/trailer.webm';
import TrailerMp4 from '../assets/trailer.mp4';

const TrailerComponent = () => {
    const [loaded, setLoaded] = useState(false);

    const loadingClass = () => {
        if (!loaded) {
            return 'w-full h-screen bg-no-repeat bg-cover flex justify-center relative transition bg-black';
        }
        return 'w-full h-screen bg-no-repeat bg-cover flex justify-center relative transition';
    };

    const loaddedClass = () => {
        if (!loaded) {
            return 'text-4xl text-white animate-pulse absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ';
        }
        return 'hidden text-4xl text-white animate-pulse absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ';
    };

    return ( <
        div className = {
            loadingClass()
        } >
        <
        span className = {
            loaddedClass()
        } > Loading... < /span> <
        video onLoadedMetadata = {
            () => {
                setLoaded(true);
            }
        }
        id = "intro"
        data - autoplay controls = {
            false
        }
        loop muted className = "w-screen m-auto" >
        <
        source src = {
            Trailer
        }
        type = "video/webm" / >
        <
        source src = {
            TrailerMp4
        }
        type = "video/mp4" / >
        <
        /video> <
        /div>
    );
};

export default TrailerComponent;