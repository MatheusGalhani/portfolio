import React from 'react';
import { _CONSTANTS } from '../../constants';
import { TypeFooter } from '../../model/footer.model';
import { FooterContainer, FooterSpan } from './footer.styled';

const Footer: React.FC<TypeFooter> = ({ description }) => {
    return (
        <FooterContainer>
            <FooterSpan>
                {_CONSTANTS.name} - {description}
            </FooterSpan>
        </FooterContainer>
    );
};

export default Footer;
