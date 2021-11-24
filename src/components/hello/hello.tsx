import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import { _CONSTANTS } from '../../constants';
import { TypeSectionWithButton } from '../../model/section.model';
import { VisitTo } from '../../styles/section.styled';
import animationData from './hello.icon.json';
import {
    Container,
    Description,
    HelloGridArea,
    IconGridArea,
    MyName,
} from './hello.styled';

interface HelloProps {
    hello: TypeSectionWithButton;
}
const Hello: React.FC<HelloProps> = ({ hello }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Container id={hello.id}>
            <HelloGridArea>
                <Description>{hello.title}</Description>
                <MyName>{_CONSTANTS.name}</MyName>
                {hello.description.map((description, index) => (
                    <Description key={`${hello.id}-${index}`}>
                        {description}
                    </Description>
                ))}
                <VisitTo
                    href={_CONSTANTS.github}
                    target="_blank"
                    rel="noopener"
                >
                    {hello.textButton} <IoArrowForwardOutline />
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
