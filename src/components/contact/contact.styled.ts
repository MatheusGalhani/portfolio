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

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
    width: 100%;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const SocialMediaLink = styled.a`
    padding: 0;
    margin: 1rem 2rem 1rem 0;
`;

export const ContactEmail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
