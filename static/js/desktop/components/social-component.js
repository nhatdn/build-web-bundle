import React from 'react';

import { ReactComponent as IconFacebook } from '../assets/social/facebook.svg';
import { ReactComponent as IconTelegram } from '../assets/social/telegram.svg';
import { ReactComponent as IconTwitter } from '../assets/social/twitter.svg';
import { ReactComponent as IconDiscord } from '../assets/social/discord.svg';
import { ReactComponent as IconYoutube } from '../assets/social/youtube.svg';
import { ReactComponent as IconReddit } from '../assets/social/reddit.svg';
const SolialComponent = () => {
  return (
    <div className="fixed right-2 top-1/2 z-[9999]">
      <div className="p-3 bg-black/70 rounded-[15px] text-white space-y-5 -translate-y-1/2 ">
        <a href="https://www.facebook.com/wofm.io" target={'_blank'} className="block" rel="noopener noreferrer">
          <IconFacebook fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
        <a href="https://t.me/WofMcommunity" target={'_blank'} className="block" rel="noopener noreferrer">
          <IconTelegram fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
        <a href="https://twitter.com/wofm_io" target={'_blank'} className="block" rel="noopener noreferrer">
          <IconTwitter fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
        <a href="http://discord.io/worldofmasters" target={'_blank'} className="block" rel="noopener noreferrer">
          <IconDiscord fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
        <a
          href="https://www.youtube.com/c/WorldOfMasters1"
          target={'_blank'}
          className="block"
          rel="noopener noreferrer"
        >
          <IconYoutube fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
        <a
          href="https://www.reddit.com/r/WorldofMasters/"
          target={'_blank'}
          className="block"
          rel="noopener noreferrer"
        >
          <IconReddit fill="white" className="h-4 m-auto hover:fill-[#C09B62] hover:scale-150 hover:duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SolialComponent;
