import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { _CONSTANTS, _HELLO_SECTION } from '../../constants';
import { VisitTo } from '../../styles/section.styled';
import { RocketIcon, SpaceIcon } from './animation';
import {
    Container,
    Description,
    HelloGridArea,
    IconGridArea,
    MyName,
} from './hello.styled';

const Hello: React.FC = () => {
    return (
        <Container id={_HELLO_SECTION.id}>
            <HelloGridArea>
                <Description>{_HELLO_SECTION.title}</Description>
                <MyName>{_CONSTANTS.name}</MyName>
                {_HELLO_SECTION.description.map((description, index) => (
                    <Description key={`${_HELLO_SECTION.id}-${index}`}>
                        {description}
                    </Description>
                ))}
                <VisitTo
                    href={_CONSTANTS.github}
                    target="_blank"
                    rel="noopener"
                >
                    Visitar GitHub <IoArrowForwardOutline />
                </VisitTo>
            </HelloGridArea>
            <IconGridArea>
                <RocketIcon />
                <SpaceIcon />
            </IconGridArea>
        </Container>
    );
};

export default Hello;
