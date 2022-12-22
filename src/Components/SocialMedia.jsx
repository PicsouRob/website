import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia({ color }) {
    return (
        <div>
            <SocialIcon bgColor="transparent" fgColor={color} url="https://twitter.com/PicsouRoberto" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://facebook.com/roberto.phanord" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://instagram.com/iampicsou" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://linkedin.com/in/phanord-picsou-roberto-1b99b8221" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://www.behance.net/wwwphanordb085" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://dribbble.com/Phanord" />
        </div>
    )
}

export default SocialMedia;