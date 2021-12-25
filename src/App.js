import React, { useState, useEffect } from "react";
import Page from 'react-page-loading';

import Home from './Pages/Home';
import bg1 from './Images/bg-1.svg';
import About from "./Pages/About";
import Service from "./Pages/Services/Index";
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

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
                    <Page loader={"bubble"} color={"#001344"} 
                      size={4} duration={1}></Page>
                </div>
            ) : (
                <div class="relative bg-[#080225]">
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