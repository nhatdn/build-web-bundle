import {
    LOCALES
} from './i18n';
import translate from './i18n/translate';

export const MENU = [{
        name: 'menu-home',
        state: 0,
        href: '#home'
    },
    {
        name: 'menu-news',
        state: 1,
        href: '#news'
    },
    {
        name: 'menu-gameplays',
        state: 2,
        href: '#gameplays'
    },
    {
        name: 'menu-roadmap',
        state: 3,
        href: '#roadmap'
    },
    {
        name: 'menu-team',
        state: 4,
        href: 'https://wofm.gitbook.io/whitepaper/overall-information/team'
    },
    {
        name: 'menu-partner',
        state: 5,
        href: '#partner',
        children: []
    },
    {
        name: '$WOFM',
        state: 6,
        children: [{
                name: 'menu-wofm-buy',
                href: 'coming-soon'
            },
            {
                name: 'menu-wofm-earn',
                href: 'coming-soon'
            },
            {
                name: 'menu-wofm-staking',
                href: 'coming-soon'
            }
        ]
    },
    {
        name: 'menu-document',
        state: 7,
        children: [{
                name: 'menu-document-Whitepaper',
                href: 'https://wofm.gitbook.io/whitepaper'
            },
            {
                name: 'menu-document-Pitchdeck',
                href: 'https://docsend.com/view/jjxhy9gf9aijiezn'
            },
            {
                name: 'menu-document-Tokenomic',
                href: 'https://wofm.gitbook.io/whitepaper/economy/tokenomics'
            }
        ]
    }
];

export const LANGUAGES = [{
        value: LOCALES.ENGLISH,
        displayValue: 'english.png'
    },
    {
        value: LOCALES.VIETNAM,
        displayValue: 'vietnam.png'
    },
    {
        value: LOCALES.CHINA,
        displayValue: 'china.png'
    }
    // { value: LOCALES.THAILAN, displayValue: 'thailand.png' },
    // { value: LOCALES.INDNESIA, displayValue: 'indonesia.png' },
    // { value: LOCALES.CHINA, displayValue: 'china.png' },
    // { value: 'vi_VI', displayValue: 'turkey.png' }
];