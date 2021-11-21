import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import { _CONSTANTS, _HELLO_SECTION } from '../../constants';
import { VisitTo } from '../../styles/section.styled';
import animationData from './hello.icon.json';
import {
    Container,
    Description,
    HelloGridArea,
    IconGridArea,
    MyName
} from './hello.styled';

const Hello: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
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
                <Lottie
                    options={defaultOptions}
                    width={450}
                    height={350}
                    isStopped={false}
                    isPaused={false}
                />
            </IconGridArea>
        </Container>
    );
};

export default Hello;
