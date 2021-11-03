import 'styled-components';

interface TypeColor {
    color: string;
    hover: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        base: {
            background: string;
        },
        color: {
            textColor: string;
            lightBlue: string;
        },
        button: {
            color: string;
            hover: string;
            text: string;
        }
    }
}
