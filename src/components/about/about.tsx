import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { CONSTANTS } from '../../constants/constants';
import { MeIcon } from '../../icons';
import { SectionTitle, VisitTo } from '../../styles/section.styled';
import { AboutMeGridArea, Container, DescriptionMe, ImageMeGridArea } from './about.styled';

const About: React.FC = () => {
    return (
        <Container id="#about">
          <ImageMeGridArea>
           <MeIcon />
          </ImageMeGridArea>
            <AboutMeGridArea>
                <SectionTitle>Sobre Mim</SectionTitle>
                <DescriptionMe>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </DescriptionMe>
                <VisitTo href={CONSTANTS.linkedin} target="_blank">
                    Visitar LinkedIn <IoArrowForwardOutline />
                </VisitTo>
            </AboutMeGridArea>
        </Container>
    );
};

export default About;
