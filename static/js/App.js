import './App.css';
import Page from './Page';
import {
    I18nProvider
} from './i18n';
import {
    LocalProvider
} from './globalState/localeProvider';

function App() {
    return ( <
        >
        <
        LocalProvider >
        <
        I18nProvider >
        <
        Page / >
        <
        /I18nProvider> <
        /LocalProvider> <
        />
    );
}

export default App;