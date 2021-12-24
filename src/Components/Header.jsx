import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

// import { useWidth } from '../Styles/GlobalStyleWrapper';
import logo from '../Images/Group 1.png';
// import SocialMedia from './SocialMedia';

function Header() {
    const [showScroll, setShowScroll] = useState(false);
    const [isShow, setIsShow] = useState(false);
    // const { width } =  useWidth();

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const toggleIcon = () => {
        setIsShow(!isShow);
    }

    window.addEventListener('scroll', checkScrollTop);

    return (
        <div class="py-6 max-w-7xl">
            <div class="flex items-center justify-between">
                <Link $isFullLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="cursor-pointer"
                >
                    <img src={logo} alt="logo" class="w-32 h-6" />
                </Link>
                <div class="hidden md:items-center md:tracking-wide md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex">
                    <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        class="cursor-pointer hover:text-gray-200"
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Home</Link>
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        class="cursor-pointer hover:text-gray-200"
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >About Me</Link>
                    <Link activeClass="active"
                        to="services"
                        spy={true}
                        class="cursor-pointer hover:text-gray-200"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Services</Link>
                </div>
                <button class="hidden py-3 px-8 font-medium tracking-wide leading-5 text-white rounded-md border-2 hover:border-0 border-gray-800 transition md:inline-block hover:bg-[#880a0c] hover:shadow-lg">
                    <Link $isContact
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </button>
                <div class="flex md:hidden" onClick={() => toggleIcon()}>
                    {!isShow ? (
                        <FaBars color="#001344"
                            size={20} style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <FaTimes color="#001344"
                            size={20} style={{ cursor: "pointer" }}
                        />
                    )}
                </div>
            </div>
            <div class="hidden">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => toggleIcon()}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => toggleIcon()}
                >About Me</Link>
                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => toggleIcon()}
                >Services</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => toggleIcon()}
                >Contact</Link>
                <div>
                    {/* <SocialMedia color="#001344" /> */}
                </div>
            </div>
        </div>
    )
}

export default Header;