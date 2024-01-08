import React, { useMemo, useState } from 'react';
import { LANGUAGES, MENU } from '../../constant';
import Logo from '../assets/menu-top/logo.png';
import IconMarketplace from '../assets/menu-top/market.png';
import { ReactComponent as IconBars } from '../assets/menu-top/bars-solid.svg';
import { ReactComponent as IconClose } from '../assets/menu-top/xmark-solid.svg';
import { ReactComponent as IconUp } from '../assets/flag/angle-down-solid.svg';
import Dropdown from './dropdown';
import translate from '../../i18n/translate';
import Popup from 'reactjs-popup';
import PopupComingSoon from './coming-soon';

const MenuComponent = () => {
  const [visible, setVisible] = useState(false);
  const [expands, setExpands] = useState([]);
  return (
    <div className="w-full fixed h-20 md:h-32 bg-black z-[999]">
      <div className="flex w-full h-full p-3">
        <div className="flex items-center justify-center w-2/6">
          <img src={Logo} alt="Logo" className="w-[85px] md:w-[75%]" />
        </div>
        <div className="flex items-center justify-around w-3/6">
          <a href="https://marketplace.wofm.io/" target={'_blank'} className="inline-block">
            <img src={IconMarketplace} alt="Marketplace" className="w-[120px] md:w-[65%] mt-[11px]" />
          </a>

          <div>
            <Dropdown data={LANGUAGES} />
          </div>
        </div>
        <div className="flex items-center justify-center w-1/6">
          <IconBars
            className="w-6 md:w-12 fill-white"
            onClick={() => {
              setVisible((prev) => !prev);
              // document.body.style.overflow = 'hidden';
            }}
          />
        </div>
      </div>
      {/* ${visible ? 'right-0' : 'right-[-1000px]'} */}
      {visible && (
        <div
          onClick={() => setVisible((prev) => !prev)}
          className={`w-full h-screen bg-black/70 fixed top-0 right-0 flex justify-end  `}
        ></div>
      )}
      <div
        className={`px-10 w-4/6 h-screen p-4 bg-[#A62F26] absolute top-0 ${
          visible ? 'right-0' : 'right-[-1000px]'
        } transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end w-full h-6">
          <IconClose
            className="w-4 md:w-8 fill-white"
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          />
        </div>
        <nav>
          <ul>
            {MENU.map((menu, key) => {
              return (
                <li key={key} className="border-b border-b-[#C65E56]">
                  <a
                    href={menu.href}
                    className="text-white flex items-center py-4 font-bold text-[16px] menu"
                    onClick={() =>
                      setVisible((prev) => {
                        if (menu?.children?.length > 0) {
                          if (expands.includes(menu.name)) {
                            setExpands((prev) => [...prev.filter((m) => m !== menu.name)]);
                          } else {
                            setExpands((prev) => [...prev, menu.name]);
                          }

                          return true;
                        }
                        return !prev;
                      })
                    }
                  >
                    {translate(`${menu.name}`)}
                    {menu?.children?.length > 0 && (
                      <IconUp
                        className={`inline-block h-5 ml-2 transition ${expands.includes(menu.name) && 'rotate-180'}`}
                      />
                    )}
                  </a>
                  {menu?.children?.length > 0 && expands.includes(menu.name) && (
                    <ul className="min-w-full pl-4 -mt-2">
                      {menu?.children?.map((submenu, key) => (
                        <li key={key}>
                          {submenu.href === 'coming-soon' ? (
                            <Popup
                              modal
                              trigger={
                                <a className={`font-bold text-[16px] block text-white py-1`}>
                                  {translate(`${submenu.name}`)}
                                </a>
                              }
                            >
                              {(close) => <PopupComingSoon close={close} />}
                            </Popup>
                          ) : (
                            <a
                              href={submenu.href}
                              onClick={($event) => {
                                setVisible((prev) => !prev);
                              }}
                              className={`font-bold text-[16px] block text-white py-1`}
                            >
                              {translate(`${submenu.name}`)}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuComponent;
