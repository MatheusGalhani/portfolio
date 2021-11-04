import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: grid;
    grid-template-areas: 'hello';
    justify-content: space-between;
    grid-gap: 1rem;
    padding: 1rem;
    width: 100%;
    @media ${breakpoints.tablets} {
        grid-template-areas: 'hello icon';
    }
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

export const IconGridArea = styled.div`
    grid-area: icon;
    display: none;
    margin-right: 1rem;

    @media ${breakpoints.tablets} {
        display: flex;
        svg {
            width: 350px;
        }
    }
`;
