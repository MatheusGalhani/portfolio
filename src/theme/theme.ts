import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
    base: {
        background: 'linear-gradient(79.63deg, #161616 12.08%, #1E3A8A 216.5%)',
    },
    color: {
        textColor: '#F9FAFB',
        underline: '#00B2FF'
    }
};

export const light: DefaultTheme = {
    base: {
        background: '#F9FAFB',
    },
    color: {
        textColor: '#171616',
        underline: '#00B2FF'
    }
};
