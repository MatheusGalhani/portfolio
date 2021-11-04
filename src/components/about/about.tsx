import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { _ABOUT_SECTION, _CONSTANTS } from '../../constants';
import { MeIcon } from '../../icons';
import {
    SectionDescription,
    SectionTitle,
    VisitTo,
} from '../../styles/section.styled';
import { AboutContent, Container, ImageContent } from './about.styled';

const About: React.FC = () => {
    return (
        <Container id={_ABOUT_SECTION.id}>
            <ImageContent>
                <MeIcon />
            </ImageContent>
            <AboutContent>
                <SectionTitle>{_ABOUT_SECTION.title}</SectionTitle>
                {_ABOUT_SECTION.description.map((description, index) => (
                    <SectionDescription key={`${_ABOUT_SECTION.id}-${index}`}>
                        {description}
                    </SectionDescription>
                ))}
                <VisitTo href={_CONSTANTS.linkedin} target="_blank">
                    Visitar LinkedIn <IoArrowForwardOutline />
                </VisitTo>
            </AboutContent>
        </Container>
    );
};

export default About;
