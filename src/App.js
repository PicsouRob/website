import React, { useState, useEffect } from "react";


import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import bg1 from './Images/bg-1.svg';
import animateIcon from './Images/loader.png';
import Home from "./Pages/Home";

function App() {
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setInterval(() => {
          setIsLoad(false);
        }, [1000]);
    }, []);

    return (
        <div class="relative">
            {isLoad ? (
                <div class="flex justify-center items-center min-h-screen">
                    <img class="animate-spin w-10 h-10" alt="" src={animateIcon} />
                </div>
            ) : (
                <div class="relative bg-[#01121b]">
                    <img class="absolute opacity-50" alt="top-svg" src={bg1} />
                    <Home />
                    <About />
                    <Service />
                    <Contact />
                    <Footer /> 
                </div>
            )}
        </div>
    );
}

export default App;