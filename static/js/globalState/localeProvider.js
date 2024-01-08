import React, {
    useState
} from 'react';
import {
    LOCALES
} from '../i18n';
const LocaleContext = React.createContext();
const LocalProvider = ({
    children
}) => {
    const [locale, setLocale] = useState(
        localStorage.getItem('locale') ? localStorage.getItem('locale') : LOCALES.ENGLISH
    );
    const setLocaleStorage = (locale) => {
        localStorage.setItem('locale', locale);
        setLocale(locale);
    };
    const value = {
        locale,
        setLocaleStorage
    };
    return <LocaleContext.Provider value = {
        value
    } > {
        children
    } < /LocaleContext.Provider>;
};
export {
    LocalProvider,
    LocaleContext
};