import styled from 'styled-components';


export const SectionTitle = styled.h2`
    position: relative;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.textColor};
    margin-top: 0;
    padding: 0;

    &::after {
        content: '';
        position: absolute;
        width: 3.25rem;
        height: 0.125rem;
        left: 0;
        bottom: -0.5rem;
        border-radius: 0.25rem;
        background: ${({ theme }) => theme.color.lightBlue};
    }
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
    font-size: 1rem;

    svg {
        margin: 0 1rem;
        font-size: 1rem;
    }

    &:hover {
        background: ${({ theme }) => theme.button.hover};
    }
`;

export const SectionDescription = styled.p`
    color: ${({ theme }) => theme.color.paragraphColor};
`;