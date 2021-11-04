import React, { useState } from 'react';
import { CONSTANTS } from '../../constants/constants';
import { GithubIcon, InstagramIcon, MailIcon } from '../../icons';
import Linkedin from '../../icons/linkedin';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
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
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [body, setBody] = useState<string>('');
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
            <ContactEmail>
                <Input
                    placeholder="Seu Nome Completo"
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Textarea
                    placeholder="Mensagem"
                    id="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </ContactEmail>
        </Container>
    );
};

export default Contact;
