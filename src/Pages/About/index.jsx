import React from 'react';
import aboutPhoto from '../../Images/picsou.jpg';

function About() {
    const animeArray = [1, 2, 3, 4, 5, 6, 77, 22, 11, 12, 31, 9, 43, 99, 29, 32, 70, 40];

    return (
        <div id="about" class="relative px-8 lg:px-16 py-16 mx-auto max-w-7xl z-20">
            <div class="flex flex-col lg:flex-row gap-16 items-center mx-auto">
                <div class="relative w-full lg:w-1/2">
                    <div class="absolute -top-2 left-0 -z-10 w-52 h-52 rounded-lg bg-[#880a0c]"></div>
                    <img class="rounded-lg z-20 translate-x-3" src={aboutPhoto} alt='about' />
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="">
                        <div class="flex gap-x-8 mb-6 items-center">
                            <div class="flex flex-col gap-y-3">
                                <span class="text-[#880a0c] text-2xl lg:text-3xl font-bold">Know</span>
                                <h1 class="font-bold text-white text-3xl lg:text-4xl">Abbout Me</h1>
                                <hr class="w-20 h-3 bg-[#880a0c] border-0 shadow-lg" />
                            </div>
                            <div class="grid grid-cols-6 gap-2 animate-bounce">
                                {animeArray.map((items, index) => (
                                    <span key={index} class="p-1 rounded-full bg-white" />
                                ))}
                            </div>
                        </div>
                        <span class="py-4 mt-4 text-gray-300 font-medium leading-relaxed">I am a Web Developer, programmer & User Interface Designer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.<br /><br /> I'm an Avid follower of technology and a developer by trade.I love learning new languages and always looking for something new to challenge myself.Since moving into full time developement, I have worked with Javascript , React and Node.I love building simple user interfaces that are beautiful to look at.</span>
                        <div class="flex flex-col gap-y-3 my-6 text-gray-300">
                            <span class=""><strong>Profession : </strong>DEVELOPER / DESIGNER</span>
                            <span class="break-word"><strong>Email : </strong>www.phanordpicsouroberto11@gmail.com</span>
                            <span class=""><strong>Phone No : </strong>+1 809 4298594</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;