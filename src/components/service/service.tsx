import React from 'react';
import { TypeServiceSection } from '../../model/service.model';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
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
                {service.description.map((description, index) => (
                    <SectionDescription key={`${service.id}-${index}`}>
                        {description}
                    </SectionDescription>
                ))}
            </ServicesDescriptionContent>
            <ServicesProviderContainer>
                {service.services.map(item => (
                    <ServicesProvider key={item.name}>
                        <IconService src={item.icon} />
                        <ServicesProviderTitle>
                            {item.name}
                        </ServicesProviderTitle>
                        <SectionDescription>
                            {item.description}
                        </SectionDescription>
                    </ServicesProvider>
                ))}
            </ServicesProviderContainer>
        </Container>
    );
};

export default Service;
