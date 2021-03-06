import React from 'react';

import SocialMedia from '../Components/SocialMedia';
import Header from '../Components/Header';
import img from '../Images/picsou.jpg';
import pic from '../Images/picsou.png';
import svg1 from '../Images/blob-haikei(2).svg';
import { openMail } from '../Utils/data';

function Home() {
    return (
        <div id="home" class="relative min-h-screen overflow-hidden">
            <Header />
            <div class="px-8 mx-auto max-w-7xl">
                <div class="relative py-16 mx-auto w-full">
                    <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
                        <div class="w-full lg:w-1/2">
                            <div class="">
                                <div class="flex gap-x-4 items-center">
                                    <h1 class="text-gray-400 text-3xl lg:text-4xl leading-normal tracking-wide font-medium pb-2">Hello, world</h1>
                                    <hr class="h-1 w-20 bg-gray-400 border-0" />
                                </div>
                                <h1 class="text-white text-4xl md:text-6xl font-medium mb-4 leading-relaxed">I'm Phanord Roberto, A Full Stack Web Developer</h1>
                                <span class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">I am a web developer & programmer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.</span>
                            </div>
                            <button class="px-8 my-4 text-white py-4 font-medium tracking-wide bg-[#880a0c] rounded-lg shadow-md transition hover:bg-teal-300 hover:text-black hover:font-semibold"
                                onClick={() => openMail()}
                            >
                                Here Me
                            </button>
                            <div class="">
                                <SocialMedia color="#fff" />
                            </div>
                        </div>
                        <div class=" relative w-full lg:w-1/2 flex z-30 items-center justify-center">
                            <div class="absolute top- right-0 flex gap-x-4 p-1 md:p-3 rounded-lg bg-white z-10 lg:z-20 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                />
                                <div class="w-50">
                                    <span class="text-sm md:text-xl font-medium">Phanord Roberto</span>
                                    <p class="font-medium text-gray-900">Full-Stack Developer</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 flex gap-x-4 p-2 md:px-5 py-2 rounded-lg bg-white z-10 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                />
                                <div class="w-50">
                                    <span class="text-sm md:text-xl font-medium">Phanord Roberto</span>
                                    <p class="font-medium text-gray-900">Programmer</p>
                                </div>
                            </div>
                            <div class="absolute bottom-0 left-0 flex gap-x-4 p-1 md:p-2 rounded-lg bg-white z-40 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                />
                                <div class="w-50">
                                    <span class="text-sm md:text-xl font-medium">Phanord Roberto</span>
                                    <p class="font-medium text-gray-900">UI|UX Designer</p>
                                </div>
                            </div>
                            <img alt="" src={svg1} class="absolute h-full" />
                            <img alt="" src={pic} class="z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;