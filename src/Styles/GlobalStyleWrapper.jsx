import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const TextStyle = styled.h1`
    font-size: ${(props) => props.width < 768 & props.$isMoreSize ? "35" : props.width >= 768 & props.$isMoreSize ? "50" : "25"}px;
    color: ${(props) => props.$isMoreSize ? props.color : "#880a0c"};
    font-weight: bold;
    ${(props) => props.$isMoreSize && `
        margin-top: -10px;
        color: ${(props) => props.color};
    `};
`;

export const Bar = styled.div`
    width: 80px;
    height: 8px;
    background-color: #880a0c;
    margin-top: -10px;
`;

export const AboutMe = styled.p`
    font-size: .85rem;
    color: #707070;
    line-height: 25px;
    padding-right: 20px;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export function HeaderDescription(props) {
    const { header, bottom, width, color } = props;

    return (
        <DescriptionWrapper>
            <div>
                <TextStyle color={color} header={header}>{header}</TextStyle>
                <TextStyle color={color} $isMoreSize width={width}>{bottom}</TextStyle>
                <Bar color={color}></Bar>
            </div>
            <div>
                <AnimationPoint color={color}></AnimationPoint>
            </div>
        </DescriptionWrapper>
    )
}

const animation = keyframes`
    0% {transform: translateX(0px); }
    75% {transform: translateX(20px); }
    100% {transform: translateX(-10px); }
`;

const Animation = styled.div`
    width: 100px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 15px 5px;
    margin: 0 15px;
    animation: ${animation} 2s infinite;
    & div {
        width: 5px;
        height: 5px;
        background: ${(props) => props.color};
        border-radius: 10px;
    };
`;

const animeArray = [1, 2, 3, 4, 5, 6, 77, 22, 11, 12, 31, 9, 43, 99, 29, 32, 70, 40];

export function AnimationPoint(props) {
    const { color } = props;

    return (
        <Animation color={color}>
            {animeArray.map((items, index) => (
                <div key={index}></div>
            ))}
        </Animation>
    )
}

export function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        checkWidth();
        window.addEventListener('resize', checkWidth);
    }, [width]);

    return { width };
}