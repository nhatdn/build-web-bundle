import {
    useEffect,
    useState
} from 'react';

const useIsMobileScreen = () => {
    let initWidth = 0;

    initWidth = window.innerWidth;
    const [width, setWidth] = useState(initWidth);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return width < 1270;
};

export default useIsMobileScreen;