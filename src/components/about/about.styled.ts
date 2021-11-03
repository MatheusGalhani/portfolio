import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
`;

export const AboutMeGridArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem;
`;

export const DescriptionMe = styled.p`
    color: ${({ theme }) => theme.color.paragraphColor};
`;

export const ImageMeGridArea = styled.div`
    display: none;
    margin: 1rem 1rem 1rem 0;
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

