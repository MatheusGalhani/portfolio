import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: grid;
    grid-template-areas: 'hello icon';
    justify-content: space-between;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
`;

export const HelloGridArea = styled.div`
    grid-area: hello;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Description = styled.span`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.textColor};
`;

export const MyName = styled.h3`
    color: ${({ theme }) => theme.color.lightBlue};
    font-size: 2.25rem;
    margin: 1rem 0;
    padding: 0;
`;

export const VisitTo = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.button.text};
    background: ${({ theme }) => theme.button.color};
    border-radius: 0.25rem;

    svg {
        margin: 0 1rem;
    }

    &:hover {
        background: ${({ theme }) => theme.button.hover};
    }
`;

export const IconGridArea = styled.div`
    grid-area: icon;
    display: none;

    @media ${breakpoints.tablets} {
        display: flex;
        svg {
            width: 350px;
        }
    }
`;
