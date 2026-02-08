import React from "react";
import Header from '../../components/Header.jsx'
import { useState, useEffect } from "react";
import Welcome from '../../components/Welcome.jsx'
import Cards from '../../components/Cards.jsx'
import Kara from '../../images/kara.webp'
import Wency from '../../images/wenx.png'

function Landing() {
  return (
    <>
    <div className="flex">
      <div className="max-w-3xl flex-column">
        <Welcome text="</> Meet the pioneers of phone repair services " speed={40} />
        <div className="grid grid-cols-2 m-[2.5em]">
          <Cards text="Wency Herrera" role="Software Developer" image={Wency}/>
          <Cards text="Wency Herrera" role="Software Developer" image={Wency}/>
          <Cards text="Wency Herrera" role="Software Developer" image={Wency}/>
          <Cards text="Wency Herrera" role="Software Developer" image={Wency}/>
          
        </div>
      </div>
    </div>  
    </>
  );
}

export default Landing;
