/** @format */

import "./App.css";
import Teste from "./components/Teste";
//  importando imagem
import img2 from "./assets/img2.png";
// importando hook
import Hook from "./components/Hook";
// importando list
import ListRender from "./components/ListRender";
// importando previous state
import PreviousState from "./components/PreviousState";
//  importando renderizaçao condicional
import ConditionalRender from "./components/ConditionalRender";
// importando Props
import Props from "./components/Props";
// importando Destructuring Props
import Destructuring from "./components/Destructuring";
// importando children
import Container from "./components/Children";
// importando funçao em props
import FunctionProps from "./components/FunctionProps";
import { useState } from "react";

// state lift
import Message from "./components/Message";
import MudarMessage from "./components/MudarMessage";

//  teste state
import SaboresPizza from "./components/SaboresPizza";
import Pizza from "./components/Pizza";

function App() {
  // renderizaçao de lista de carros
  const cars = [
    { id: 1, brand: "Audi", year: 2020 },
    { id: 2, brand: "Fiat", year: 2019 },
    { id: 3, brand: "Chevrolet", year: 2018 },
    { id: 4, brand: "Volkswagen", year: 2018 },
  ];
  //  -------   //
  function showMessage() {
    alert("Mensagem enviada com sucesso!");
  }
  //  -------   //
  const [message, setMessage] = useState("");
  const alterarMessage = (msg) => {
    setMessage(msg);
  };
  //  -------   //
  const [pizza, setPizza] = useState("");
  const alterarPizza = (pizza) => {
    setPizza(pizza);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <Teste />
      <h1> teste </h1>
      {/* Imagem em public */}
      <h2> Imagem em public</h2>
      <img src="./img1.jpg" alt="" />
      {/* imagem em assets */}
      <h2> Imagem em assets</h2>
      <img src={img2} alt="" />
      <br />
      <br />

      <div
        className="hook"
        style={{ border: "1.5px solid", borderRadius: "8px", padding: "10px" }}
      >
        <h1>hooks</h1>
        <Hook />
      </div>
      <br />
      <br />
      <div
        className="list"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Lista de Users <br />
          (Render List)
        </h1>
        <ListRender />
      </div>
      <div
        className="list"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Previous State</h1>
        <PreviousState />
      </div>
      <div
        className="list"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Renderização Condicional</h1>
        <ConditionalRender />
      </div>

      <div
        className="list"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Props </h1>
        <Props user="Pedro" />
        <h1 style={{ textAlign: "center" }}> Desestruturação</h1>
        <Destructuring brand="Mercedes" model="A250" km={120.0} />
      </div>
      <br />
      <div
        className="props"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Props </h1>
        <h1 style={{ textAlign: "center" }}> Reutilização de Componentes </h1>
        <Destructuring brand="Mercedes" year={2025} />
        <Destructuring brand="BMW" year={2020} />
        <Destructuring brand="Vw" year={2024} />
      </div>
      <br />
      <div
        className="props"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Props </h1>
        <h1 style={{ textAlign: "center" }}> Reutilização com Loop </h1>
        {cars.map((car) => (
          <Destructuring key={car.id} brand={car.brand} year={car.year} />
        ))}
      </div>
      <div
        className="props"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Children </h1>
        <Container>
          <p>usando o children</p>
        </Container>
      </div>
      {/* componnete pai */}
      <div
        className="props"
        style={{
          border: "1.5px solid #888",
          borderRadius: "8px",
          padding: "10px",
          margin: "15px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Function props</h1>
        <FunctionProps myFunction={showMessage} />
      </div>
      <div style={{ border: "1.5px solid #888" }}>
        <h1> state lift</h1>
        <Message msg={message} />
        {/* Passa a mensagem correta para o componente Message */}
        <MudarMessage alterarMessage={alterarMessage} />
        {/* Passa a função para MudarMessage */}
      </div>

      <div>
        <h1>teste</h1>
        {/*  primeiro pizza (antes do =) é o nome da prop */}
        {/* O segundo pizza (depois do =) é o valor do estado que o pai tem guardado */}
        <Pizza pizza={pizza} />
        <SaboresPizza alterarPizza={alterarPizza} />
      </div>
    </div>
  );
}

export default App;
