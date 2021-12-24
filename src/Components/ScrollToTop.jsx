import React from 'react';
import { Link } from "react-scroll";
import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTop() {
    return (
        <div class="absolute flex shadow-lg bottom-8 cursor-pointer right-6 bg-white w-8 h-8 rounded-full items-center justify-center">
            <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="selected"
            >
                <FaArrowCircleUp class="" size={30} />
            </Link>
        </div>
    )
}

export default ScrollToTop;