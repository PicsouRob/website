import React, { useState, useCallback, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

import logo from '../Images/Group 1.png';
// import logo2 from '../Images/Picsou.svg';
import SocialMedia from './SocialMedia';

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = useCallback(() => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
    }, [showScroll]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, [checkScrollTop]);

    const toggleIcon = () => {
        setIsShow(!isShow);
    }

    return (
        <div class={`${showScroll ? "fixed w-full z-50 bg-[#080225]" : ""} py-6 overflow-hidden px-8 mx-auto max-w-7xl`}>
            <div class="flex items-center justify-between">
                <Link $isFullLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <img src={logo} alt="logo" class="w-32 h-6 cursor-pointer" />
                </Link>
                <div class="hidden md:items-center md:tracking-wide md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex">
                    <div class="cursor-pointer hover:text-gray-200">
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            class=""
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClassName="selected"
                        >Home</Link>
                    </div>
                    <div class="cursor-pointer hover:text-gray-200">
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            class=""
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClassName="selected"
                        >About Me</Link>
                    </div>
                    <div class="cursor-pointer hover:text-gray-200">
                        <Link activeClass="active"
                            to="services"
                            spy={true}
                            class=""
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClassName="selected"
                        >Services</Link>
                    </div>
                </div>
                <button class="hidden py-3 px-8 font-medium tracking-wide leading-5 text-white rounded-md border-2 hover:border-[#880a0c] border-gray-800 transition md:inline-block hover:bg-[#880a0c] hover:shadow-lg">
                    <Link activeClass="active"
                        to="contact"
                        spy={true}
                        class="h-auto w-auto"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </button>
                <div class="flex md:hidden" onClick={() => toggleIcon()}>
                    {!isShow ? (
                        <FaBars color="#fff"
                            size={20} style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <FaTimes color="#fff"
                            size={20} style={{ cursor: "pointer" }}
                        />
                    )}
                </div>
            </div>
            <div class={`${isShow ? "absolute right-0 -translate-x-0" : "absolute right-0 translate-x-full"} h-2/5 bg-[#080225] py-8 z-40 mt-4 w-3/5 transition transform ease-out duration-300 inline-block md:hidden overflow-hidden`}>
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
                            onClick={() => toggleIcon()}
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
                    <SocialMedia color="grey" />
                </div>
            </div>
        </div>
    )
}

export default Header;