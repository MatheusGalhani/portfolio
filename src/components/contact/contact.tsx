import React, { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { _CONSTANTS, _CONTACT_SECTION } from '../../constants/constants';
import { GithubIcon, InstagramIcon, MailIcon } from '../../icons';
import Linkedin from '../../icons/linkedin';
import {
    SectionDescription,
    SectionTitle,
    VisitTo,
} from '../../styles/section.styled';
import Input from '../input/input';
import Textarea from '../textarea/textarea';
import {
    ContactEmail,
    ContactInfo,
    Container,
    SocialMediaContainer,
    SocialMediaLink,
} from './contact.styled';

const Contact: React.FC = () => {
    const [subject, setSubject] = useState<string>('');
    const [body, setBody] = useState<string>('');
    return (
        <Container id={_CONTACT_SECTION.id}>
            <ContactInfo>
                <SectionTitle>{_CONTACT_SECTION.title}</SectionTitle>
                <SectionDescription>
                    {_CONTACT_SECTION.description}
                </SectionDescription>
                <SocialMediaContainer>
                    <SocialMediaLink href={_CONSTANTS.email} target="_blank">
                        <MailIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href={_CONSTANTS.github} target="_blank">
                        <GithubIcon />
                    </SocialMediaLink>
                    <SocialMediaLink href={_CONSTANTS.linkedin} target="_blank">
                        <Linkedin />
                    </SocialMediaLink>
                    <SocialMediaLink
                        href={_CONSTANTS.instagram}
                        target="_blank"
                    >
                        <InstagramIcon />
                    </SocialMediaLink>
                </SocialMediaContainer>
            </ContactInfo>
            <ContactEmail>
                <Input
                    placeholder="Seu Nome Completo"
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <Textarea
                    placeholder="Mensagem"
                    id="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <VisitTo
                    href={`${_CONSTANTS.email}?subject=${subject}&body=${body}`}
                >
                    Enviar Mensagem <IoArrowForwardOutline />
                </VisitTo>
            </ContactEmail>
        </Container>
    );
};

export default Contact;
