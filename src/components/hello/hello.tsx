import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { RocketIcon, SpaceIcon } from './animation';
import {
    Container,
    Description,
    HelloGridArea,
    IconGridArea,
    MyName,
    VisitTo,
} from './hello.styled';

const Hello: React.FC = () => {
    return (
        <Container id="#hello">
            <HelloGridArea>
                <Description>Olá, eu sou</Description>
                <MyName>Matheus Galhani</MyName>
                <Description>Desenvolvedor full stack.</Description>
                <VisitTo href="https://github.com/MatheusGalhani" target="_blank">
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
