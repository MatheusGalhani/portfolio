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
