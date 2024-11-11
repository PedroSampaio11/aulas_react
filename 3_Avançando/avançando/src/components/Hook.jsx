/** @format */

import { useState } from "react";

const Hook = () => {
  let valor = 11;
  const [number, setNumber] = useState(0);
  return (
    <>
      <p>valor atual : {valor}</p>
      <button
        onClick={() => {
          valor = 15;
        }}
      >
        SOMAR
      </button>

      <div>
        
        <h2>useState</h2>
        <p>valor atual com hook : {number}</p>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          SOMAR
        </button>
        <button
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          SUBTRAIR
        </button>
      </div>
    </>
  );
};

export default Hook;
