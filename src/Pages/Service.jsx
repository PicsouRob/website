import React from 'react';

import bg1 from '../Images/bg-1.svg';

import { data, openMail } from '../Utils/data';

function Service() {
    return (
        <div id="services" class="relative bg-primary">
            <img class="absolute opacity-50" alt="top-svg" src={bg1} />
            <img class="absolute bottom-0 right-0 transform rotate-180 opacity-50" alt="top-svg" src={bg1} />
            <div class="px-8 max-w-7xl py-16 mx-auto text-white">
                <div class="mb-16 flex flex-col items-center justify-center">
                    <h3 class="text-[#880a0c] text-xl font-bold z-10">
                        Services
                    </h3>
                    <h1 class="relative z-10 text-4xl font-bold leading-tight md:text-5xl break-words text-center">
                        My Awasome Services
                    </h1>
                    <p class="pt-2 max-w-lg font-medium tracking-wide leading-relaxed text-center z-10">
                        You may be interested in what i cn offer you. More services you can find below.I do everything at a high level.
                    </p>
                </div>
                <div class="flex flex-col lg:flex-row gap-y-10 gap-x-24 z-30 mt-10">
                    <div class="grid grid-cols-1 gap-y-6 w-full lg:w-1/2">
                        {data.map((items, index) => (
                            <div key={index} class="py-4 px-6 rounded-lg bg-white flex items-center gap-y-4 gap-x-6 shadow-lg transition duration-300 ease-out hover:translate-y-2 h-auto w-full text-primary z-10">
                                <img alt={items.name} src={items.image}
                                    class="w-20 h-20 drop-shadow-lg border border-primary p-2 rounded-md"
                                />
                                <div class="flex flex-col">
                                    <h3 class="font-medium text-xl md:text-2xl">{items.name}</h3>
                                    <span class="leading-normal  font-medium tracking-wide text-gray-800">{items.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class=" w-full lg:w-1/2 z-10">
                        <h1 class="relative text-4xl font-bold leading-tight md:text-5xl">
                            How can i help you?
                        </h1>
                        <p class="py-4 max-w-lg font-medium tracking-wide leading-loose">
                            I will you with fingind a solution and solved you problems, I use process design to create digital products.Besids that also their Business. <br /> <br /> So if you need a website or a application for your business, don't hesitate to contact me.
                        </p>
                        <button class="px-8 mt-3 md:px-8 py-3 font-semibold tracking-wide bg-[#880a0c] text-white rounded-lg shadow-md transition hover:opacity-90"
                            onClick={() => openMail()}
                        >
                            Here Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;