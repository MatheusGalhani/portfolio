import React from 'react';
import { useTheme } from 'styled-components';

const Instagram: React.FC = () => {
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
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="url(#paint0_linear_30:834)"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 11.3698C16.1234 12.2021 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.1901 8.22768 13.4227 8.09402 12.592C7.96035 11.7614 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79355 10.2009 8.40605C10.9477 8.01856 11.7977 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
                stroke="url(#paint1_linear_30:834)"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17.5 6.5H17.51"
                stroke="url(#paint2_linear_30:834)"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_30:834"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stop-color={theme.color.contactBottomIcon}
                    />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_30:834"
                    x1="12.0432"
                    y1="7.95654"
                    x2="12.0432"
                    y2="15.9566"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stop-color={theme.color.contactBottomIcon}
                    />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_30:834"
                    x1="17.505"
                    y1="6.5"
                    x2="17.505"
                    y2="7.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stop-color={theme.color.contactBottomIcon}
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Instagram;
