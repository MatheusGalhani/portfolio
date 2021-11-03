import React from 'react';
import { useTheme } from 'styled-components';

const Hamburger: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27.9999 13.3333H9.33325"
                stroke={theme.color.textColor}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M28 8H4"
                stroke={theme.color.textColor}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M28 18.6667H4"
                stroke={theme.color.textColor}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M27.9999 24H9.33325"
                stroke={theme.color.textColor}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Hamburger;
