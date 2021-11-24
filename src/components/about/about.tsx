import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { _CONSTANTS } from '../../constants';
import { MeIcon } from '../../icons';
import { TypeSectionWithButton } from '../../model/section.model';
import {
    SectionDescription,
    SectionTitle,
    VisitTo,
} from '../../styles/section.styled';
import { AboutContent, Container, ImageContent } from './about.styled';

interface AboutProps {
    about: TypeSectionWithButton;
}
const About: React.FC<AboutProps> = ({ about }) => {
    return (
        <Container id={about.id}>
            <ImageContent>
                <MeIcon />
            </ImageContent>
            <AboutContent>
                <SectionTitle>{about.title}</SectionTitle>
                {about.description.map((description, index) => (
                    <SectionDescription key={`${about.id}-${index}`}>
                        {description}
                    </SectionDescription>
                ))}
                <VisitTo
                    href={_CONSTANTS.linkedin}
                    target="_blank"
                    rel="noopener"
                >
                    {about.textButton} <IoArrowForwardOutline />
                </VisitTo>
            </AboutContent>
        </Container>
    );
};

export default About;
