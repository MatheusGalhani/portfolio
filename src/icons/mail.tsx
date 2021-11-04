import React from 'react';
import { useTheme } from 'styled-components';

const Mail: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="url(#paint0_linear_114:6)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 6L12 13L2 6"
                stroke="url(#paint1_linear_114:6)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_114:6"
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stopColor={theme.color.contactBottomIcon}
                    />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_114:6"
                    x1="12"
                    y1="6"
                    x2="12"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stopColor={theme.color.contactBottomIcon}
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Mail;
