import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    background: #f5f6fa;
`;

export const ContactHeader = styled.div`
    padding: ${(props) => props.width < 920 ? "0px 20px" : "0px 120px"}
`;

export const Link = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    margin: 5px 0;
    color: #001344;
    &:hover {
        cursor: pointer;
    }
`;

export const IconContent = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #880a0c;
    border-radius: 50px;
    color: #fff;
`;

export const ContactLinkInfo = styled.div`
    line-height: 1px;
    margin-left: 15px;
`;

export const ContactLink = styled.div`
    width: ${(props) => props.width < 765 ? "100" : "40"}%; 
    margin-bottom: 30px;
`;

export const ContactContainer = styled.div`
    background: #f5f6fa;
    padding: ${(props) => props.width < 920 ? "40px 20px 30px 20px" : "40px 120px"};
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.width < 576 ? "center" : "space-between"};
    div:nth-of-type(3) {
        margin-top: 10px;
    }
`;

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 8px;
    margin-top: 50px;

`;

export const ContactTilte = styled.h2`
    color: #1c1f21;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

export const ContactPara = styled.p`
    text-align: center;
    font-size: .85rem;
    color: #707070;
    line-height: 18px;
    margin-top: -2px;
`;

export const Button = styled.button`
    width: 180px;
    background-color: #880a0c;
    color: #fff;
    padding: 14px 20px;
    margin: 7px 0;
    border: none;
    border-radius: 50px;
    font-size: .85rem;
    font-weight: 600;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;