import React from 'react';
import { CircleSvg, FirstCircle, SecondCircle } from './circle.styled';

interface CircleProps {
    rating: number;
}

const Circle: React.FC<CircleProps> = ({ rating }) => {
    return (
        <CircleSvg>
            <FirstCircle cx={50} cy={50} r={50} />
            <SecondCircle cx={50} cy={50} r={50} rating={rating} />
        </CircleSvg>
    );
};

export default Circle;
