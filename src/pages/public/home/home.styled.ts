import styled from 'styled-components';
import { devices } from '../../../rules/devices';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: ${devices.ultraLargeDesktops};
    margin: 1rem;
`;


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin: 5rem 0 1rem;
`;
