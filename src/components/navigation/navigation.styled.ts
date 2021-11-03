import styled, { css } from 'styled-components';
import { breakpoints } from '../../rules/devices';
import { HashLink as Link } from 'react-router-hash-link';
interface NavContainerProps {
    isShown?: boolean;
}

export const NavContainer = styled.div<NavContainerProps>`
    display: none;
    ${({ isShown }) =>
        isShown &&
        css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ theme }) => theme.base.background};
            height: 100vh;
            z-index: 20;
        `}

    @media ${breakpoints.tablets} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    @media ${breakpoints.tablets} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const NavItem = styled.li`
    margin: 1rem;
    @media ${breakpoints.tablets} {
        margin: 0 1rem;
    }
`;

export const NavAction = styled(Link)`
    font-size: 1rem;
    color: ${({ theme }) => theme.color.textColor};
    text-decoration: none;

    &:hover {
        text-decoration: underline ${({ theme }) => theme.color.lightBlue};
    }
`;
