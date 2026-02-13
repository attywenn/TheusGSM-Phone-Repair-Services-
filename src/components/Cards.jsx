import React from "react";
import { useState } from "react";

function Cards ({text, role, image}) {

    return (
        <>
            <div className="border-solid border-[3px] p-4 m-2 flex max-w-[25em] justify-start items-center rounded-[2em]">
                <img src={image} alt="image" className="size-[4em] rounded-[50%]" />
                <div className="flex-column p-[0.4rem] ml-4">
                    <div className="text-[1.8rem] text-black font-bold">{text}</div>
                    <div className="text-[1rem] text-black">{role}</div>
                </div>    
            </div>
        </>
    )
}

export default Cards;