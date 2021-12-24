import styled, { keyframes } from 'styled-components';
import { Link } from "react-scroll";

export const HeaderWrapper = styled.nav`
    position: ${(props) => props.isFixed ? "fixed" : "relative"};
    width: 100%;
    height: ${(props) => props.width < 576 ? 75 : 90}px;
    background: #fff;
    z-index: 1;
    transition: position .3s;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: 0 ${(props) => props.width < 920 ? 20 : 120}px;
    &.nav-container .active {
        color: #001344;
    }
`;

const animation = keyframes`
    0% {  width: 0%; }
    100% { width: 80%; }
`;

export const ColumnMenu = styled.div`
    position: absolute;
    right: 0;
    width: 80%;
    height: ${window.innerHeight}px;
    background: #fff;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${animation} 0.2s linear;
`;

export const SocialMediaBlock = styled.div`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderContent = styled.div`
    display: ${(props) => props.width > 920 ? "flex" : "none"};
`;

export const StyledLink = styled(Link)`
    padding: 10px 35px;
    color: #1c1f21;
    text-decoration: none;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        color: #880a0c;
    }
    ${(props) =>
        props.$isFullLink &&`
        font-size: 35px;
        padding: 0;
    `};
    ${(props) =>
        props.$isContact &&`
        background: #880a0c;
        margin-left: 40px;
        border-radius: 50px;
        color: #fff;
        z-index: 10;
        &:hover {
            opacity: 0.8;
            color: #fff;
        }
    `};
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: #001344;
    font-weight: 600;
    &:hover {
        border-bottom: 1px solid transparent;
        background: #001344;
        cursor: pointer;
        color: #fff;
    }
`;