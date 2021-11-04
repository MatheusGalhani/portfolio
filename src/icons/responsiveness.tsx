import React from 'react';
import { useTheme } from 'styled-components';

const Responsiveness: React.FC = () => {
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
                d="M6.33337 22.1666H15.8334V31.6666"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M31.6666 15.8334H22.1666V6.33337"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.1666 15.8333L33.25 4.75"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.75 33.25L15.8333 22.1666"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Responsiveness;
