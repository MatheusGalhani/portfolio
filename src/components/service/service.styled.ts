import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;

    @media ${breakpoints.desktops} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ServicesDescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem;
`;

export const ServicesProviderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media ${breakpoints.tablets} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ServicesProvider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    margin: 1rem;
`;

export const ServicesProviderTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.color.textColor};
`;

export const IconService = styled.img`
    width: 30px;
`;
