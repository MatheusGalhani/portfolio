import React from 'react';
import { useTheme } from 'styled-components';

const Close: React.FC = () => {
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
                d="M24 8L8 24"
                stroke={theme.color.textColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 8L24 24"
                stroke={theme.color.textColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Close;
