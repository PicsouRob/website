import React from 'react';
import SocialMedia from './SocialMedia';

function Footer() {
    return (
        <div class="flex flex-col justify-center items-center gap-y-2 text-teal-200 py-6 bg-slate-900">
            <SocialMedia color="#707070" />
            <span>Copyright © 2021 - All Rights Reserved</span>
            <span>Powered by Phanord Roberto</span>
        </div>
    )
}

export default Footer;