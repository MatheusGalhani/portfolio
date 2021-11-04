import React from 'react';
import {_CONSTANTS } from '../../constants/constants';
import { FooterContainer, FooterSpan } from './footer.styled';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterSpan>{_CONSTANTS.name} - Todos os direitos reservados</FooterSpan>
        </FooterContainer>
    );
};

export default Footer;
