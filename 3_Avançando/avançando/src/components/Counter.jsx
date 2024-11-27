/** @format */

import { useState } from "react";
const Counter = () => {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p> numero: {contador}</p>
      <button onClick={aumentar}> aumentar</button>
    </div>
  );
};

export default Counter;
