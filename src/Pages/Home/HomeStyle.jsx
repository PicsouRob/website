import styled from 'styled-components';
import img from '../../Images/image.svg';
import picsou from '../../Images/picsou.jpg';

export const HomeWrapper = styled.div`
    position: relative;
    display: flex;
    height: ${(props) => props.width < 576 ? window.innerHeight - 75 : window.innerHeight - 90}px;
    // background-color: #f7f9fb;
    align-items: center;
    padding: 0 ${(props) => props.width < 920 ? 20 : 120}px;
`;

export const HomeContainer = styled.div`
    width: ${(props) => props.width < 765 ? 100 : 50}%;
`;

export const ProfilImage = styled.div`
    height: 190px;
    background: url(${picsou}); 
    background-position: top;
    background-size: cover;
    margin-bottom: 20px;
`;

export const DescriptorStyle = styled.h1`
    font-weight: bold;
    color: #001344;
    font-size: ${(props) => props.width < 576 ? 30 : 50}px;
    margin-top: -20px;
`;

export const SocialIconContent = styled.div`
    margin-top: 20px;
`;

export const InfoStyle = styled.p`
    font-size: .75rem;
    color: #707070;
    margin-top: -10px;
    font-weight: 600;
`;

export const TextStyle = styled.h2`
    color: #1c1f21;
    font-size: ${(props) => props.width < 576 ? 30 : 50}px;
`;

export const ButtonStyle = styled.button`
    padding: .6923076923rem  30px;
    color: #001344;
    border-radius: 50px;
    border: 2px solid #880a0c;
    margin-top: 20px;
    background: #f7f9fb;
    font-size: .75rem;
    font-weight: bold;
    &:hover {
        background: #880a0c;
        color: #fff;
        cursor: pointer;
    }
`;

export const Image = styled.div`
    position: absolute;
    right: 0px;
    top: -50px;
    width: 60%;
    height: ${window.innerHeight}px;
    z-index: 0;
    background: url(${img});
    background-repeat: no-repeat;    
    background-size: 100% 100%;
`;