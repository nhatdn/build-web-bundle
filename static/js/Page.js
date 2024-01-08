import { BrowserView, MobileView } from 'react-device-detect';
import Mobile from './mobile/pages';
import Desktop from './desktop/pages';
import useIsMobileScreen from './useIsMobileSCR';

const Page = (props) => {
  const isMobile = useIsMobileScreen();
  return (
    <>
      <BrowserView>{!isMobile ? <Desktop /> : <Mobile />}</BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
};
export default Page;
