import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { CONSTANTS } from '../../constants/constants';
import { MeIcon } from '../../icons';
import { SectionDescription, SectionTitle, VisitTo } from '../../styles/section.styled';
import {
    AboutContent,
    Container,
    ImageContent,
} from './about.styled';

const About: React.FC = () => {
    return (
        <Container id="about">
            <ImageContent>
                <MeIcon />
            </ImageContent>
            <AboutContent>
                <SectionTitle>Sobre Mim</SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </SectionDescription>
                <VisitTo href={CONSTANTS.linkedin} target="_blank">
                    Visitar LinkedIn <IoArrowForwardOutline />
                </VisitTo>
            </AboutContent>
        </Container>
    );
};

export default About;
