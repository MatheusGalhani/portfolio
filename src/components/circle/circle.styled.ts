import styled from 'styled-components';

export const CircleSvg = styled.svg`
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    margin: 0;
    padding: 0;
`;

const InternalCircleSvg = styled.circle`
    stroke: ${({ theme }) => theme.color.lightBlue};
    fill: ${({ theme }) => theme.color.skillBackground};
    stroke-width: 10;
    stroke-dasharray: 314;
    stroke-dashoffset: 314;
    transform: translate(0.6rem, 0.6rem);
    stroke-linecap: round;
`;

export const FirstCircle = styled(InternalCircleSvg)`
    stroke-dashoffset: 0;
    stroke: ${({ theme }) => theme.color.skillBackground};
`;

interface SecondCircleProps {
    rating: number;
}

export const SecondCircle = styled(InternalCircleSvg)<SecondCircleProps>`
    stroke-dashoffset: ${({ rating }) => 314 - (314 * rating) / 100};
    stroke: ${({ theme }) => theme.color.lightBlue};
`;
