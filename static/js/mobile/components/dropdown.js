import React, {
    useContext,
    useState
} from 'react';

import {
    ReactComponent as IconUp
} from '../assets/menu-top/angle-up-solid.svg';
import {
    ReactComponent as IconDown
} from '../assets/menu-top/angle-down-solid.svg';
import {
    LocaleContext
} from '../../globalState/localeProvider';

const Dropdown = ({
    data
}) => {
    const context = useContext(LocaleContext);
    const [selected, setSelected] = useState(() => {
        let initalState;
        if (localStorage.getItem('locale')) {
            initalState = data.find((x) => x.value === localStorage.getItem('locale'));
        } else {
            initalState = data[0];
        }

        return initalState;
    });
    const [visible, setVisible] = useState(false);

    const onSelect = (menu) => {
        setSelected(menu);
        context.setLocaleStorage(menu.value);
        setVisible(false);
    };
    return ( <
        div className = "relative" >
        <
        h3 onClick = {
            () => setVisible((prev) => !prev)
        }
        className = "w-16 text-center cursor-pointer" >
        <
        img src = {
            `${process.env.PUBLIC_URL}/assets/flag/${selected.displayValue}`
        }
        className = "inline-block h-10" / > {
            ' '
        } {
            visible ? < IconUp className = "inline-block h-4" / > : < IconDown className = "inline-block h-4" / >
        } <
        /h3> <
        ul className = {
            `${visible ? 'block' : 'hidden'} absolute bg-black/70 rounded-xl w-14 left-[-2px] `
        } > {
            data.map((menu, key) => ( <
                li key = {
                    key
                }
                onClick = {
                    () => onSelect(menu)
                }
                className = {
                    ` 
            text-center hover:bg-[#E10A19] rounded-tl-lg rounded-br-lg transition-colors duration-400 ease-in ${
              selected.value === menu.value ? 'bg-[#E10A19]' : ''
            }`
                } >
                <
                img src = {
                    `${process.env.PUBLIC_URL}/assets/flag/${menu.displayValue}`
                }
                className = "inline-block h-10 m-auto cursor-pointer" /
                >
                <
                /li>
            ))
        } <
        li > < /li> <
        /ul> <
        /div>
    );
};
export default Dropdown;