import React from 'react';
import SocialMedia from './SocialMedia';

function Footer() {
    return (
        <div class="flex flex-col justify-center items-center gap-y-2 text-white py-6 bg-primary">
            <SocialMedia color="#fff" />
            <span>Copyright © 2023 - All Rights Reserved</span>
            <span>Powered by Phanord Roberto</span>
        </div>
    )
}

export default Footer;