import React, { useState, useEffect } from "react";


import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import animateIcon from './Images/loader.png';
import Home from "./Pages/Home";

function App() {
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(false);
    }, [isLoad]);

    return (
        <div class="relative">
            {isLoad ? (
                <div class={`${!isLoad && "hidden opacitty-0"} flex justify-center items-center min-h-screen absolute inset-0`}>
                    <img class="animate-spin w-10 h-10 bg-white -z-30" alt="" src={animateIcon} />
                </div>
            ) : (
                <div class="relative bg-primary z-30">
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