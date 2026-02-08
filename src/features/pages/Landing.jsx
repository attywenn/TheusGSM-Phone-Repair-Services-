import React from "react";
import Header from '../../components/Header.jsx'
import { useState, useEffect } from "react";
import Welcome from '../../components/Welcome.jsx'

function Landing() {
  return (
    <>
    <div className="flex">
      <div className="max-w-3xl">
        <Welcome text="</> Meet the pioneers of phone repair services " speed={40} />
      </div>
    </div>  
    </>
  );
}

export default Landing;
