import React, { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Input from '../../components/input/input';
import Textarea from '../../components/textarea/textarea';
import { _CONSTANTS } from '../../constants';
import { GithubIcon, InstagramIcon, MailIcon } from '../../icons';
import Linkedin from '../../icons/linkedin';
import { TypeContactSection } from '../../model/contact.model';
import {
    SectionDescription,
    SectionTitle,
    VisitTo,
} from '../../styles/section.styled';
import {
    ContactEmail,
    ContactInfo,
    Container,
    SocialMediaContainer,
    SocialMediaLink,
} from './contact.styled';
interface ContactProps {
    contact: TypeContactSection;
}
const Contact: React.FC<ContactProps> = ({ contact }) => {
    const [subject, setSubject] = useState<string>('');
    const [body, setBody] = useState<string>('');
    return (
        <Container id={contact.id}>
            <ContactInfo>
                <SectionTitle>{contact.title}</SectionTitle>
                {contact.description.map((description, index) => (
                    <SectionDescription key={`${contact.id}-${index}`}>
                        {description}
                    </SectionDescription>
                ))}
                <SocialMediaContainer>
                    <SocialMediaLink
                        href={_CONSTANTS.email}
                        target="_blank"
                        aria-label={contact.ariaLabel.email}
                    >
                        <MailIcon />
                    </SocialMediaLink>
                    <SocialMediaLink
                        href={_CONSTANTS.github}
                        target="_blank"
                        aria-label={contact.ariaLabel.github}
                        rel="noopener"
                    >
                        <GithubIcon />
                    </SocialMediaLink>
                    <SocialMediaLink
                        href={_CONSTANTS.linkedin}
                        target="_blank"
                        aria-label={contact.ariaLabel.linkedin}
                        rel="noopener"
                    >
                        <Linkedin />
                    </SocialMediaLink>
                    <SocialMediaLink
                        href={_CONSTANTS.instagram}
                        target="_blank"
                        aria-label={contact.ariaLabel.instagram}
                        rel="noopener"
                    >
                        <InstagramIcon />
                    </SocialMediaLink>
                </SocialMediaContainer>
            </ContactInfo>
            <ContactEmail>
                <Input
                    placeholder={contact.placeholder.name}
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
                <Textarea
                    placeholder={contact.placeholder.message}
                    id="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <VisitTo
                    href={`${_CONSTANTS.email}?subject=${subject}&body=${body}`}
                >
                    {contact.textButton} <IoArrowForwardOutline />
                </VisitTo>
            </ContactEmail>
        </Container>
    );
};

export default Contact;
