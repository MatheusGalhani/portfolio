import React from 'react';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import { Container, ServicesContent } from './service.styled';

const Service: React.FC = () => {
    return (
        <Container>
            <ServicesContent>
                <SectionTitle>Sobre Mim</SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </SectionDescription>
            </ServicesContent>
        </Container>
    );
};

export default Service;
