import React, { useState } from "react";

const Functions = () => {
  const [number, setNumber] = useState(7);s

  const handleIncrease = () => {
    setNumber(number + 1);
  };
  console.log("clicked");

  return (
    <div>
      <h1>Counter</h1>
      <h2>{number}</h2>
      <button onClick={handleIncrease}>increase</button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default Functions;
