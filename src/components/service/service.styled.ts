import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: flex;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;

    @media ${breakpoints.tablets} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;


export const ServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem;
`;