import React from 'react';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import { itemsServicesProvider } from './service.model';
import {
    Container,
    ServicesDescriptionContent,
    ServicesProvider,
    ServicesProviderContainer,
    ServicesProviderTitle,
} from './service.styled';

const Service: React.FC = () => {
    return (
        <Container id="services">
            <ServicesDescriptionContent>
                <SectionTitle>Serviços</SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </SectionDescription>
            </ServicesDescriptionContent>
            <ServicesProviderContainer>
                {itemsServicesProvider.map(item => (
                    <ServicesProvider key={item.name}>
                        {item.icon}
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
