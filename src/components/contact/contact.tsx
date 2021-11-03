import React from 'react';
import { CONSTANTS } from '../../constants/constants';
import { GithubIcon, InstagramIcon, MailIcon } from '../../icons';
import Linkedin from '../../icons/linkedin';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import {
    ContactInfo,
    Container,
    SocialMediaContainer,
    SocialMediaLink,
} from './contact.styled';

const Contact: React.FC = () => {
    return (
        <Container id="contact">
            <ContactInfo>
                <SectionTitle>Contato</SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </SectionDescription>
                <SocialMediaContainer>
                    <SocialMediaLink href={CONSTANTS.email} target="_blank">
                        <MailIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href={CONSTANTS.github} target="_blank">
                        <GithubIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href={CONSTANTS.linkedin} target="_blank">
                        <Linkedin />
                    </SocialMediaLink>
                    <SocialMediaLink href={CONSTANTS.instagram} target="_blank">
                        <InstagramIcon />
                    </SocialMediaLink>
                </SocialMediaContainer>
            </ContactInfo>
        </Container>
    );
};

export default Contact;
