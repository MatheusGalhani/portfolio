import React from 'react';
import { _SERVICE_SECTION } from '../../constants';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import {
    Container,
    ServicesDescriptionContent,
    ServicesProvider,
    ServicesProviderContainer,
    ServicesProviderTitle,
} from './service.styled';

const Service: React.FC = () => {
    return (
        <Container id={_SERVICE_SECTION.id}>
            <ServicesDescriptionContent>
                <SectionTitle>{_SERVICE_SECTION.title}</SectionTitle>
                {_SERVICE_SECTION.description.map((description, index) => (
                    <SectionDescription key={`${_SERVICE_SECTION.id}-${index}`}>
                        {description}
                    </SectionDescription>
                ))}
            </ServicesDescriptionContent>
            <ServicesProviderContainer>
                {_SERVICE_SECTION.services.map(item => (
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
