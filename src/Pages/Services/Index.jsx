import React from 'react';

import { data } from '../../Utils/data';
import HeaderText from '../../Components/HeaderText';

function Service() {
    return (
        <div id="services" class="relative mx-auto px-8 max-w-7xl py-16 my-12">
            <div class="mb-24">
                <HeaderText text="Services" title="My Awasome" color="#fff" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-32 mt-10">
                {data.map((items, index) => (
                    <div key={index} class="py-8 px-6 rounded-lg bg-white h-50 flex flex-col items-center gap-y-4 shadow-lg transition duration-300 ease-out hover:translate-y-4">
                        <img alt={items.name} src={items.image}
                            class="w-24 h-24 drop-shadow-lg"
                        />
                        <h3 class="font-medium text-xl">{items.name}</h3>
                        <span class="leading-normal text-center tracking-wide">{items.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service;