import React from "react";
import Navigation from "./Navigation.jsx";
import logoImg from "../images/gsm-logo.jpg";

function Header() {
  return (
    <div className="flex bg-blue-500 font-[roboto]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6 justify-between items-center p-4 p-6">
          <img
            className="size-[5.5rem] flex rounded-[50%] border-2 border-black"
            src={logoImg}
            alt="logo"
          />
          <div className="column">
            <div className="text-white text-2xl font-bold">
              TheusGSM Repair Services Portal System
            </div>
            <div className="text-white text-2 font-bold italic">
              Stores in Parang and Malanday, Marikina City
            </div>
          </div>
        </div>
          <Navigation />
      </div>
    </div>
  );
}

//final

export default Header;
