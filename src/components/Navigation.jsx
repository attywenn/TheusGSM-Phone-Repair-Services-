import React from "react";
import Homepage from "../App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation () {
    return (
        <BrowserRouter>
            <nav className="text-[#F5F5F5]">
                <Link to="/" className="font-bold text-[2rem] pr-[2em] hover:text-black">Home</Link>
                <Link to="/" className="font-bold text-[2rem] pr-[2em] hover:text-black">About</Link>
                <Link to="/" className="font-bold text-[2rem] pr-[2em] hover:text-black">Services</Link>
                <Link to="/" className="font-bold text-[2rem] pr-[2em] hover:text-black">Portal</Link>
            </nav>

            <Routes>
                <Route path="/homepage" element={<Homepage />} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default Navigation;