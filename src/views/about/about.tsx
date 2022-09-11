import parse from 'html-react-parser';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { _CONSTANTS } from '../../constants';
import { MeIcon } from '../../icons';
import { TypeSectionWithButton } from '../../model/section.model';
import { SectionTitle, VisitTo } from '../../styles/section.styled';
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
                {parse(about.description)}
                <VisitTo
                    href={_CONSTANTS.linkedin}
                    target="_blank"
                    rel="noopener"
                >
                    {about.text_button} <IoArrowForwardOutline />
                </VisitTo>
            </AboutContent>
        </Container>
    );
};

export default About;
