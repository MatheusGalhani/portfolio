import parse from 'html-react-parser';
import React from 'react';
import { TypeServiceSection } from '../../model/service.model';
import { SectionTitle } from '../../styles/section.styled';
import {
    Container,
    IconService,
    ServicesDescriptionContent,
    ServicesProvider,
    ServicesProviderContainer,
    ServicesProviderTitle,
} from './service.styled';

interface ServiceProps {
    service: TypeServiceSection;
}
const Service: React.FC<ServiceProps> = ({ service }) => {
    return (
        <Container id={service.id}>
            <ServicesDescriptionContent>
                <SectionTitle>{service.title}</SectionTitle>
                {parse(service.description)}
            </ServicesDescriptionContent>
            <ServicesProviderContainer>
                {service.items.map(item => (
                    <ServicesProvider key={item.name}>
                        <IconService src={item.icon} alt={item.name} />
                        <ServicesProviderTitle>
                            {item.name}
                        </ServicesProviderTitle>
                        {parse(item.description)}
                    </ServicesProvider>
                ))}
            </ServicesProviderContainer>
        </Container>
    );
};

export default Service;
