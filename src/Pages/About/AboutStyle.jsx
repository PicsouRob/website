import styled from 'styled-components';

export const AboutWrapper = styled.div`
    padding: 50px ${(props) => props.width < 920 ? 20 : 120}px;
`;

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.width < 768 ? "auto" : "auto auto"};
    gap: 10px 50px;
`; 

export const ImageContaint = styled.img`
    display: flex;
    width: ${(props) => props.width > 920 ? "500px" : "340px"};
    height: 480px;
    border-radius: 20px;
    margin: -125px 0px 0 10px;
`;

export const BottomContainer = styled.span`
    display: flex;
    flex-direction: column;
`;

export const SquareStyle = styled.div`
    width: 200px;
    height: 150px;
    background-color: #880a0c;
    border-radius: 25px;
    margin: 0px 0 0 0;
`;

export const TextBottom = styled.span`
    padding: 5px 0px;
    color: #242323;
    font-size: .85rem;
`;