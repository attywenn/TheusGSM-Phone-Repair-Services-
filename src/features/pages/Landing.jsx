import React from "react";
import { useState, useEffect } from "react";
import Welcome from '../../components/Welcome.jsx'

function Landing() {
  return (
    <>
      <div className="max-w-3xl">
        <Welcome text="</> Meet the pioneers of phone repair services " speed={70} />
      </div>
    </>
  );
}

export default Landing;
