import React from 'react';

import SocialMedia from '../../Components/SocialMedia';
import Header from '../../Components/Header';
import img from '../../Images/picsou.jpg';
// import design from '../../Images/Mediamodifier-Design.svg';
// import img2 from '../../Images/image.svg';
// import circle from '../../Images/circle-scatter-haikei.svg';

function Home() {
    // const { width } = useWidth();

    const openMail = () => {
        window.open('mailto:www.phanordpicsouroberto11@gmail.com?subject=Services&body=Salut Roberto');
    }

    return (
        <div id="home" class="relative px-8 mx-auto max-w-7xl z-20">
            <Header />
            {/* <img alt="" src={circle} class="absolute top-0 right-0" /> */}
            <div class="flex flex-col lg:flex-row items-center gap-10">
                <div class="w-full lg:w-1/2">
                    <div class="flex md:items-center md:gap-8 lg:gap-x-16 md:hidden py-10">
                        <img alt="" src={img} class="rounded-lg" />
                    </div>
                    <div class="">
                        <h1 class="text-gray-400 text-5xl lg:text-6xl tracking-wide font-medium pb-2">Hello, world</h1>
                        <h1 class="text-white text-5xl md:text-6xl lg:text-7xl font-medium mb-4 leading-relaxed">I'm Phanord Roberto, A Full Stack Web Developer</h1>
                        {/* <h1 class="text-white text-5xl lg:text-6xl font-medium mb-4 leading-normal">
                            UI|UX Designer and Full Stack Developer
                        </h1> */}
                        <span class="py-4 mt-4 text-gray-300 font-medium leading-relaxed">I am a web developer & programmer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.</span>
                    </div>
                    <button class="cursor-pointer text-white hover:opacity-80 border-1 bg-[#880a0c] px-8 py-2 hover:bg-[#880a0c] rounded-full my-8" onClick={() => openMail()}
                    >
                        Here Me
                    </button>
                    <div class="">
                        <SocialMedia color="#fff" />
                    </div>
                </div>
                <div class="hidden lg:relative lg:w-1/2 lg:flex lg:z-10 lg:h-auto py-10">
                    <img alt="" src={img} class="rounded-full bg-contain" />
                </div>
                    {/* <img alt="" src={design} class="position top-0 right-9 h-40 w-40" /> */}
            </div>
        </div>
    )
}

export default Home;