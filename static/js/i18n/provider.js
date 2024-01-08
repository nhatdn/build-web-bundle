import React, {
    Fragment,
    useContext
} from 'react';
import {
    IntlProvider
} from 'react-intl';
import messages from './messages';
import {
    LocaleContext
} from '../globalState/localeProvider';
const Provider = ({
    children
}) => {
    const localeContext = useContext(LocaleContext);
    return ( <
        IntlProvider locale = {
            localeContext.locale
        }
        textComponent = {
            Fragment
        }
        messages = {
            messages[localeContext.locale]
        } > {
            children
        } <
        /IntlProvider>
    );
};
export default Provider;