import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    background: ${({ theme }) => theme.footer.background};
    padding: 1.5rem;
`;

export const FooterSpan = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.footer.textColor};
`;