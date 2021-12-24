import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopView = styled.div`
    position: fixed;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
`;

const Icon = styled(FaArrowCircleUp)`
    background: #fff;
    color: #880a0c;
    border-radius: 50px;
    border: none;
    width: 30px;
    height: 30px;
`;

function ScrollToTop() {
    return (
        <ScrollToTopView>
            <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="selected"
            >
                <Icon size={30}></Icon>
            </Link>
        </ScrollToTopView>
    )
}

export default ScrollToTop;

