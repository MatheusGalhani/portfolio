import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import {_CONSTANTS, _HELLO_SECTION } from '../../constants/constants';
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
                <Description>{_HELLO_SECTION.description}</Description>
                <VisitTo href={_CONSTANTS.github} target="_blank">
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
