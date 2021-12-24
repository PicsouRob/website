import React from 'react';

function HeaderText(props) {
    const { title, text, color } = props;
    const animeArray = [1, 2, 3, 4, 5, 6, 77, 22, 11, 12, 31, 9, 43, 99, 29, 32, 70, 40];

    return (
        <div class="flex gap-x-8 mb-6 items-center">
            <div class="flex flex-col gap-y-3">
                <span class="text-[#880a0c] text-2xl lg:text-3xl font-bold">{title}</span>
                <h1 class="font-bold text-3xl lg:text-4xl"
                    style={{ color: color ? color : "#fff" }}
                >{text}</h1>
                <hr class="w-20 h-3 bg-[#880a0c] border-0 shadow-lg" />
            </div>
            <div class="grid grid-cols-6 gap-2 animate-bounce">
                {animeArray.map((items, index) => (
                    <span key={index} class="p-1 rounded-full" 
                        style={{ backgroundColor: color ? color : "#fff" }}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeaderText;