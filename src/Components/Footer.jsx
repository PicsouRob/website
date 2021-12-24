import React from 'react';
import SocialMedia from './SocialMedia';

const footerStyle = {
    height: 140,
    padding: "50px 0",
    display: "flex",
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: "center",
    background: "#1C1F21",
    color: "#707070",
    fontSize: "14px",
    lineHeight: "25px",
};

function Footer() {
    return (
        <div style={footerStyle}>
            <SocialMedia color="#707070" />
            <span>Copyright © 2021 - All Rights Reserved</span>
            <span>Powered by Phanord Roberto</span>
        </div>
    )
}

export default Footer;
