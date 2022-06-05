import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: flex;
    grid-gap: 1rem;
    width: 100%;
    @media ${breakpoints.tablets} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1rem 1rem;
`;

export const ImageContent = styled.div`
    display: none;
    margin: 0 1rem 1rem 0;
    @media ${breakpoints.tablets} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        svg {
            width: 400px;
        }
    }
`;
