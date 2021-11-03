import styled, { keyframes } from 'styled-components';

const RocketAnimation = keyframes`
    from {
        transform: translate(40px, 20px);
    }
    to {
        transform: translate(20px, 0px);
    }
`;

export const SpaceSvg = styled.svg`
    position: relative;
`;

export const RocketSvg = styled.svg`
    position: absolute;
    z-index: 3;
    animation: ${RocketAnimation} 3s ease-in-out infinite alternate;
`;
