import React from 'react';
import { Link } from 'react-scroll';
import SocialMedia from './SocialMedia';

function ToggleMenu({ isShow, setIsShow }) {
    const toggleIcon = () => {
        setIsShow(!isShow);
    }
    
    return (
        <div class={`${isShow ? "-translate-x-0" : "absolute right-0 translate-x-full"} h-2/5 bg-primary py-8 z-40 mt-4 w-full transition transform ease-out duration-300 inline-block md:hidden overflow-hidden`}>
            <div class="grid grid-cols-1 divide-y text-center text-white text-xl font-medium">
                <div class="cursor-pointer py-3">
                    <Link
                        activeClass="active"
                        to="home"
                        class=""
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => {
                            toggleIcon();
                        }}
                    >Home</Link>
                </div>
                <div class="cursor-pointer py-3">
                    <Link
                        activeClass="active"
                        to="about"
                        class=""
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >About Me</Link>
                </div>
                <div class="cursor-pointer py-3">
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        class=""
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >Services</Link>
                </div>
                <div class="cursor-pointer py-3">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        class=""
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => toggleIcon()}
                    >Contact</Link>
                </div>
            </div>
            <div class="mt-16 flex items-center justify-center">
                <SocialMedia color="white" />
            </div>
        </div>
    );
}

export default ToggleMenu;