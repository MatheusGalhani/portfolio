import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
    base: {
        background: 'linear-gradient(79.63deg, #161616 12.08%, #1E3A8A 216.5%)',
    },
    color: {
        textColor: '#F9FAFB',
        lightBlue: '#00B2FF',
        paragraphColor: '#8491A0',
        skillBackground: '#212121',
        contactBottomIcon: '#181B26',
    },
    button: {
        color: 'linear-gradient(267.93deg, #01b3ff -42.09%, #17191f 108.97%)',
        hover: 'linear-gradient(267.7deg, #01B3FF -10.09%, #17191F 152.32%)',
        text: '#F9FAFB',
    },
    footer: {
        textColor: '#F9FAFB',
        background:
            'linear-gradient(269.61deg, #0881B6 -148.76%, #171616 124.28%)',
    },
};

export const light: DefaultTheme = {
    base: {
        background: '#F9FAFB',
    },
    color: {
        textColor: '#171616',
        lightBlue: '#00B2FF',
        paragraphColor: '#595959',
        skillBackground: '#F4F4F4',
        contactBottomIcon: '#F9FAFB',
    },
    button: {
        color: '#01B3FF',
        hover: '#059BDB',
        text: '#F9FAFB',
    },
    footer: {
        textColor: '#F9FAFB',
        background: '#00B2FF',
    },
};
