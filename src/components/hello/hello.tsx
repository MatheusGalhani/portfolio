import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { CONSTANTS } from '../../constants/constants';
import { VisitTo } from '../../styles/section.styled';
import { RocketIcon, SpaceIcon } from './animation';
import {
    Container,
    Description,
    HelloGridArea,
    IconGridArea,
    MyName
} from './hello.styled';

const Hello: React.FC = () => {
    return (
        <Container id="#hello">
            <HelloGridArea>
                <Description>Olá, eu sou</Description>
                <MyName>{CONSTANTS.name}</MyName>
                <Description>Desenvolvedor full stack.</Description>
                <VisitTo href={CONSTANTS.github} target="_blank">
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
