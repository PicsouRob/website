import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia(props) {
    const { color } = props;

    return (
        <div>
            <SocialIcon bgColor="transparent" fgColor={color} url="https://twitter.com/PicsouRoberto" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://facebook.com/roberto.phanord" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://instagram.com/iampicsou" />
            <SocialIcon bgColor="transparent" fgColor={color} url="https://linkedin.com/in/phanord-picsou-roberto-1b99b8221" />
        </div>
    )
}

export default SocialMedia;