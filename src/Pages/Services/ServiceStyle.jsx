import styled from 'styled-components';

export const ServicesWrapper = styled.div`
    position: relative;
    background-color: #f7f9fb;
    padding-top: 20px;
    padding: 50px ${(props) => props.width < 920 ? 20 : 120}px;
`;

export const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.width < 576 ? "center" : "space-between"};
    margin-top: 30px;
`;

export const ServicesContent = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    line-height: 20px;
    margin-top: 30px;
    box-shadow:  10px 10px 30px #f7f9fb,
             3px 3px 3px #707070;
    padding: 20px;
    border-radius: 10px;
    &:hover {
        transform: skewX(-5deg);
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Text = styled.h3`
    color: #1c1f21;
`;

export const TextStyle = styled.p`
    color: #707070;
    font-size: .85rem;
    text-align: center;
    margin-top: -10px;
`;