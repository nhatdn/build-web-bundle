/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
    useState
} from 'react';
import Logo from '../assets/logo.png';
import Marketeplace from '../assets/market.png';
import {
    LANGUAGES,
    MENU
} from '../../constant';
import Dropdown from './dropdown';
import translate from '../../i18n/translate';
import Popup from 'reactjs-popup';
import PopupComingSoon from './coming-soon';

const MenuComponent = () => {
        // const [menuActive, setMenuActive] = useState(() => {
        //   return MENU?.find((menu) => menu.href === window.location.hash).state;
        // });

        const MenuChild = ({
                submenu
            }) => {
                return ( <
                    ul className = "absolute left-[-50%] hidden group-hover:block bg-[#8A0D14] text-[15px] w-[200px] rounded-bl-lg rounded-br-lg h-[120px]" > {
                        submenu.map((submenu, key) => ( <
                                li key = {
                                    key
                                } > {
                                    submenu.href === 'coming-soon' ? ( <
                                        Popup modal trigger = { <
                                            a
                                            target = "_blank"
                                            className = "text-sm 2xl:text-[16px] text-center block py-1 hover:text-[#f7eba4] transition-colors ease-in duration-7s leading-6 hover:cursor-pointer" >
                                            {
                                                translate(`${submenu.name}`)
                                            } <
                                            /a>
                                        } >
                                        {
                                            (close) => < PopupComingSoon close = {
                                                close
                                            }
                                            />} <
                                            /Popup>
                                        ): ( <
                                            a href = {
                                                submenu.href
                                            }
                                            target = "_blank"
                                            className = "text-sm 2xl:text-[16px] text-center block py-1 hover:text-[#f7eba4] transition-colors ease-in duration-7s leading-6" >
                                            {
                                                translate(`${submenu.name}`)
                                            } <
                                            /a>
                                        )
                                    } <
                                    /li>
                                ))
                        } <
                        /ul>
                    );
                };
                return ( <
                    div className = "fixed top-0 w-full left-0 z-[999] px-4 xl:px-10 2xl:px-[100px] h-[100px]  2xl:h-[120px]" >
                    <
                    div className = "flex items-center h-full gap-1" >
                    <
                    div className = "h-[100px] min-w-[100px] lg:w-[12%] 2xl:w-[15%]" >
                    <
                    img src = {
                        Logo
                    }
                    alt = "Logo"
                    className = "object-contain w-full h-full" / >
                    <
                    /div> <
                    ul className = "flex items-center font-bold text-white min-w-[840px] w-[78%] xl:w-[75%]  2xl:pl-[70px]" > {
                        MENU.map((menu, index) => {
                                return ( <
                                    li key = {
                                        menu + index
                                    }
                                    className = "relative inline-block group" >
                                    <
                                    a
                                    // onClick={() => setMenuActive(menu.state)}
                                    href = {
                                        menu.href
                                    }
                                    target = {
                                        menu.state === 4 ? '_blank' : '_parent'
                                    }
                                    className = {
                                        `text-sm 2xl:text-[16px] hover:bg-[#8A0D14]  transition-colors duration-500 ease-in-out block px-2 3xl:px-4 leading-[50px] ${
                    menu.name === '$WOFM' || menu.name === 'menu-document'
                      ? 'rounded-tl-lg rounded-tr-lg '
                      : 'rounded-lg'
                  }`
                                    }
                                    key = {
                                        index
                                    } >
                                    {
                                        translate(`${menu.name}`)
                                    } {
                                        menu ? .children ? .length > 0 && < MenuChild submenu = {
                                            menu ? .children
                                        }
                                        />} <
                                        /a> <
                                        /li>
                                    );
                                })
                        } <
                        li className = "inline-block" >
                        <
                        a href = "https://marketplace.wofm.io/" >
                        <
                        img
                        src = {
                            Marketeplace
                        }
                        alt = ""
                        className = "h-[28px] xl:h-[32px] 2xl:h-[45px] inline-block hover:cursor-pointer" /
                        >
                        <
                        /a> <
                        /li> <
                        /ul> <
                        div className = "flex items-center w-[7%] xl:w-[10%]" >
                        <
                        Dropdown data = {
                            LANGUAGES
                        }
                        /> <
                        /div> <
                        /div> <
                        /div>
                    );
                };

                export default MenuComponent;