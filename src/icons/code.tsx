import React from 'react';
import { useTheme } from 'styled-components';

const Code: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25.3334 28.5L34.8334 19L25.3334 9.5"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.6666 9.5L3.16663 19L12.6666 28.5"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Code;
