import React from 'react';
import { Link } from 'react-scroll';

import SocialMedia from '../Components/SocialMedia';
import Header from '../Components/Header';
import img from '../Images/picsou.jpg';
import pic from '../Images/picsou.png';
import svg1 from '../Images/blob-haikei(2).svg';
// import { openMail } from '../Utils/data';
import bg1 from '../Images/bg-1.svg';

function Home() {
    return (
        <div id="home" class="relative min-h-screen flex flex-col overflow-hidden">
            <Header />
            <div class="px-8 mx-auto max-w-7xl flex-1 flex items-center">
            <img class="absolute bottom-0 right-0 transform rotate-180 opacity-50" alt="top-svg" src={bg1} />
                <div class="relative py-16 mx-auto w-full">
                    <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
                        <div class="w-full lg:w-1/2">
                            <div class="">
                                <div class="flex gap-x-4 items-center">
                                    <h1 class="text-gray-400 text-2xl leading-normal tracking-wide font-medium pb-2 text-uppercase">Welcome to my world</h1>
                                    <hr class="h-1 w-20 bg-gray-700 border-0" />
                                </div>
                                <h1 class="text-white text-4xl md:text-6xl font-semibold mb-4 leading-relaxed tracking-tighter">I'm Phanord <strong className="text-secondary">Roberto</strong>, a full stack web developer.</h1>
                                <span class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">I am a web developer & programmer living in Santo-Domingo, Dominican Republic. I make web and Cross-platform applications , usually with Reactjs and React native.</span>
                            </div>
                            <div className="cursor-pointer ">
                                <Link activeClass="active"
                                    to="home"
                                    spy={ true }
                                    class=""
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClassName="selected"
                                >
                                    <button
                                        className="px-4 my-5 text-white py-4 font-medium tracking-wide bg-[#880a0c] rounded-md shadow-md transition hover:bg-white hover:text-black hover:font-semibold flex items-center gap-x-2 min-w-min">
                                        More About Me
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4 animate-bounce transition duration-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div class="">
                                <SocialMedia color="#fff" />
                            </div>
                        </div>
                        <div class=" relative w-full lg:w-1/2 flex z-30 items-center justify-center">
                            <div class="absolute top- right-0 flex gap-x-2 p-1 md:p-3 rounded-lg bg-white z-10 lg:z-20 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 rounded-full"
                                />
                                <div class="w-50 leading-3 text-sm ">
                                    <span class="font-medium">Phanord Roberto</span>
                                    <p class="font-medium text-gray-900">Full-Stack Developer</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 flex gap-x-2 p-2 md:px-3 py-2 rounded-lg bg-white z-10 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 rounded-full"
                                />
                                <div class="w-50 leading-4 text-sm">
                                    <span class="font-medium">Phanord Roberto</span>
                                    <p class="font-medium text-gray-900">Programmer</p>
                                </div>
                            </div>
                            <div class="absolute bottom-0 left-0 flex gap-x-2 p-2 md:px-3 rounded-lg bg-white z-40 items-center w-auto ms:w-64 shadow-lg">
                                <img alt="" src={img} 
                                    class="w-8 h-8 rounded-full"
                                />
                                <div class="w-50 leading-4 text-sm ">
                                    <span class="font-medium">Phanord Roberto</span>
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