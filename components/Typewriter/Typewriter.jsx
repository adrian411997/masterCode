"use client";

import { Typewriter, Cursor } from "react-simple-typewriter";

const TypewriterEffect = ({ word, loop, typeSpeed, deleteSpeed }) => {
  return (
    <>
      <h1>
        <Typewriter
          words={word}
          loop={loop}
          typeSpeed={typeSpeed}
          deleteSpeed={deleteSpeed}
        />
        <Cursor />
      </h1>
    </>
  );
};
export default TypewriterEffect;
