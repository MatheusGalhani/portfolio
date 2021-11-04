import React from 'react';
import { CONSTANTS } from '../../constants/constants';
import { FooterContainer, FooterSpan } from './footer.styled';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterSpan>{CONSTANTS.name} - Todos os direitos reservados</FooterSpan>
        </FooterContainer>
    );
};

export default Footer;
