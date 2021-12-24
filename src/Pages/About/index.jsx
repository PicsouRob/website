import React from 'react';

import HeaderText from '../../Components/HeaderText';
import aboutPhoto from '../../Images/picsou.jpg';

function About() {
    return (
        <div id="about" class="relative px-8 py-16 mx-auto max-w-7xl z-20">
            <div class="flex flex-col lg:flex-row gap-16 items-center mx-auto">
                <div class="relative w-full lg:w-1/2">
                    <div class="absolute -top-2 left-0 -z-10 w-52 h-52 rounded-lg bg-[#880a0c]"></div>
                    <img class="rounded-lg z-20 translate-x-3" src={aboutPhoto} alt='about' />
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="">
                        <HeaderText text="Abbout Me" title="Know" />
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