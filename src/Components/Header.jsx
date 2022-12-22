import React, { useState, useCallback, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

import SocialMedia from './SocialMedia';
import img from '../Images/picsou.jpg';
import logo from "../Images/logo2.png";

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
        <div class={`${showScroll ? "fixed w-full" : ""} py-2 overflow-hidden z-50 bg-white`}>
            <div class="mx-auto">
                <div class="max-w-7xl px-8 mx-auto flex items-center justify-between">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div class="flex text-2xl md:text-3xl font-bold cursor-pointer gap-x- items-center">
                            <img alt="" src={img} 
                                class="w-8 h-8 md:w-8 md:h-8 rounded-full"
                            />
                            <img alt="" src={logo} 
                                class="w-12 h-8"
                            />
                        </div>
                    </Link>
                    <div class="hidden md:items-center md:tracking-wide text-primary md:gap-8 lg:gap-x-16 md:flex font-medium text-[17px]">
                        <div class="cursor-pointer ">
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
                        <div class="cursor-pointer ">
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
                        <div class="cursor-pointer ">
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
                    <button class="hidden py-2.5 px-6 font-medium tracking-wide leading-5 text-white rounded-md transition md:inline-block hover:bg-primary/90 hover:shadow-lg bg-primary">
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
            </div>
            <div class={`${isShow ? "-translate-x-0" : "absolute right-0 translate-x-full"} h-2/5 bg-[#080225] py-8 z-40 mt-4 w-full transition transform ease-out duration-300 inline-block md:hidden overflow-hidden`}>
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
                    <SocialMedia color="grey" />
                </div>
            </div>
        </div>
    )
}

export default Header;