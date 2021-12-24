import React, { useState, useEffect } from "react";
import Page from 'react-page-loading';

// import Header from './Components/Header';
import Home from './Pages/Home';
import bg1 from './Images/bg-1.svg';
import About from "./Pages/About";
// import Service from "./Pages/Services/Index";
// import Contact from './Pages/Contact';
// import ScrollToTop from "./Components/ScrollToTop";
// import Footer from './Components/Footer';

function App() {
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setInterval(() => {
          setIsLoad(false);
        }, [1000]);
    }, []);

    return (
        <div class="relative bg-slate-900">
            {isLoad ? (
                <div>
                    <Page loader={"bubble"} color={"#001344"} 
                      size={4} duration={1}></Page>
                </div>
            ) : (
                <div class="relative flex flex-col items-center justify-center bg-slate-900 max-w-7xl h-auto">
                    <img class="absolute opacity-70" alt="top-svg" src={bg1} />
                    {/* <Header /> */}
                    <Home />
                    <About />
                    {/* <Service /> */}
                    {/* <Contact /> */}
                    {/* <ScrollToTop /> */}
                    {/* <Footer />  */}
                </div>
            )}
        </div>
    );
}

export default App;