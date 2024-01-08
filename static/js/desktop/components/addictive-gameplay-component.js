import React from 'react';
import Slider from 'react-slick';
import SlickWrapper from '../../components/style-slick';
import IconNext from '../assets/gameplay/icon-next.png';
import IconPrev from '../assets/gameplay/icon-prev.png';
import Frames_1 from '../assets/gameplay/frame_1.png';
import Frames_2 from '../assets/gameplay/frame_2.png';
import Frames_3 from '../assets/gameplay/frame_3.png';
import Frames_4 from '../assets/gameplay/frame_4.png';
import Frames_5 from '../assets/gameplay/frame_5.png';
import Frames_6 from '../assets/gameplay/frame_6.png';
import ImageLazy from '../../components/imageLazyLoad';
import translate from '../../i18n/translate';
const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="absolute prev top-1/2 -right-0"
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
  >
    <img src={IconNext} alt="prev" className="w-[30px] hover:scale-110 hover:duration-300" />
  </button>
);
const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="absolute next top-1/2 -left-10"
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
  >
    <img src={IconPrev} alt="next" className="w-[30px] hover:scale-110 hover:duration-300" />
  </button>
);

const AddictiveGameplayComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    nextArrow: <ArrowLeft />,
    prevArrow: <ArrowRight />,
    customPaging: function () {
      return <div className="w-[60px] h-[5px] rounded bg-white mt-8 hover:bg-[#ffb800]"></div>;
    },
    dotsClass: 'slick-dots slick-thumb'
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-[715px] h-screen bg-no-repeat bg-cover bg-gameplay">
      <div className="xl:w-full 2xl:w-[1280px] m-auto">
        <div className="text-center">
          <p className="xl:text-4xl 2xl:text-5xl font-bold font-UTM-Guanine bg-gradient-to-b from-[#FFFCF1] to-[#BC945A] text-transparent bg-clip-text text-center !leading-normal">
            ADDICTIVE GAMEPLAY
          </p>
          <div className="m-auto pb-14 2xl:w-full xl:w-[85%]">
            <SlickWrapper>
              <div>
                <Slider {...settings}>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_1} alt="frame" />
                    <div className="w-[450px] min-h-[300px] absolute xl:top-[18%] 2xl:top-[25%] xl:right-20 2xl:right-36 font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('heroes-slogan')}</p>
                      <div className="m-auto xl:pt-6 2xl:pt-8">
                        <iframe
                          src="https://www.youtube.com/embed/7-J-8UGxd8s"
                          title="YouTube video player"
                          className="m-auto"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[120px] w-full mt-4 px-3 text-white overflow-y-auto">
                        {translate('dcs-Heroes-line-1')} <br />
                        {translate('dcs-Heroes-line-2')}
                      </p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_2} alt="frame" />
                    <div className="w-[450px] min-h-[300px] absolute xl:top-[20%] 2xl:top-[25%] xl:right-20 2xl:right-36 font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('adventure-Maps-slogan')}</p>
                      <div className="m-auto 2xl:pt-8 xl:pt-6">
                        <iframe
                          className="m-auto"
                          src="https://www.youtube.com/embed/QMqLefQPG8w"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[160px] w-full mt-4 text-white">{translate('dcs-Adventure-Maps')}</p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_3} alt="frame" />
                    <div className="w-[450px] min-h-[300px] absolute xl:top-[20%] 2xl:top-[25%] xl:right-24 2xl:right-36 font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('PvE-slogan')}</p>
                      <div className="m-auto 2xl:pt-8 xl:pt-6">
                        <iframe
                          className="m-auto"
                          src="https://www.youtube.com/embed/Dq_ht6f0ZS8"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[160px] w-full mt-4 text-white">{translate('dcs-PvE')}</p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_4} alt="frame" />
                    <div className="w-[420px] min-h-[300px] absolute xl:top-[20%] 2xl:top-[25%] xl:right-24 2xl:right-[150px] font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('PvP-slogan')}</p>
                      <div className="m-auto 2xl:pt-8 xl:pt-6">
                        <iframe
                          className="m-auto"
                          src="https://www.youtube.com/embed/jREHLgnLbxA"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[160px] w-full mt-4 text-white">{translate('dcs-PvP')}</p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_5} alt="frame" />
                    <div className="w-[450px] min-h-[300px] absolute top-[25%] right-36 font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('Bounty-Hunters-slogan')}</p>
                      <div className="m-auto 2xl:pt-8 xl:pt-6">
                        <iframe
                          className="m-auto"
                          src="https://www.youtube.com/embed/7HiwCjyPZAw"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[160px] w-full mt-4 text-white">{translate('dcs-Bounty-Hunters')}</p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[300px] relative">
                    <ImageLazy className={'pl-1'} image={Frames_6} alt="frame" />
                    <div className="w-[420px] min-h-[300px] absolute top-[25%] xl:right-16 2xl:right-36 font-Fira_Sans">
                      <p className="text-4xl font-bold text-white">{translate('Boss-Battle-slogan')}</p>
                      <div className="m-auto 2xl:pt-8 xl:pt-6">
                        <iframe
                          className="m-auto"
                          src="https://www.youtube.com/embed/z1v7DSf0pRg"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                      <p className="h-[160px] w-full mt-4 text-white">{translate('dcs-Boss-Battle')}</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </SlickWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddictiveGameplayComponent;
