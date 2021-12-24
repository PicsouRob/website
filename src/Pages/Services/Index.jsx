import React from 'react';
import crossApp from '../../Images/app.svg';
import design from '../../Images/design.svg';
import website from '../../Images/website.svg';
import { useWidth, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import { ServicesWrapper, ServicesContent, TextStyle, Image, Text,
    ServicesContainer } from './ServiceStyle';

function Service() {
    const { width } =  useWidth();

    const data = [
        {
            name: "Website Application",
            image: website,
            text: "I am a web developer & programmer, i build web application usually with Reactjs"
        },
        {
            name: "Cross-Platform App",
            image: crossApp,
            text: "You have a business, a restaurant or any type of buisiness which you will need an application for your users, do not hesitate to contact me."
        },
        {
            name: "Design UI|UX",
            image: design,
            text: "I love building simple user interfaces that are beautiful to look at, Hire me for your design of your product."
        },
    ];

    return (
        <ServicesWrapper id="services" width={width}>
            <HeaderDescription header="My Awasome" width={width}
                bottom="Services" color="#001344"
            ></HeaderDescription>
            <ServicesContainer width={width}>
                {data.map((items, index) => (
                    <ServicesContent key={index}>
                        <Image alt={items.name} src={items.image} />
                        <Text>{items.name}</Text>
                        <TextStyle>{items.text}</TextStyle>
                    </ServicesContent>
                ))}
            </ServicesContainer>
        </ServicesWrapper>
    )
}

export default Service;