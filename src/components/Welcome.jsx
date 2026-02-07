import React from "react";
import { useState, useEffect } from "react";

function Welcome({ text, speed = 700 }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (index >= text.length) return;

    const time = setTimeout(() => {
      setDisplay((p) => p + text[index]);
      setIndex((p) => p + 1);
    }, speed);

    return () => clearTimeout(time);
  }, [index, text, speed]);
  return <span className="font-bold text-[#353935] text-[3rem]">{display}</span>;
}

export default Welcome;
