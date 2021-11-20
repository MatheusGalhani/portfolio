import styled from 'styled-components';
import { breakpoints, devices } from '../../rules/devices';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 99;
    background: ${({ theme }) => theme.base.background};
`;

export const HeaderMenu = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 1rem;
    margin-left: 1rem;
    width: 100%;
    max-width: ${devices.ultraLargeDesktops};
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.textColor};
    padding: 0;
    margin: 0;
`;

export const Spacer = styled.span`
    flex: 1;
`;

export const ThemeButton = styled.button`
    display: flex;
    font-size: 1rem;
    background: transparent;
    margin: 0 1rem;
`;

export const HamburgerButton = styled.button`
    display: flex;
    font-size: 1rem;
    background: transparent;
    z-index: 30;
    margin: 0;
    padding: 0;

    @media ${breakpoints.tablets} {
        display: none;
    }

`;



export const TitleAction = styled.a``;