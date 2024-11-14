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

function App() {
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
          margin: "15px 0"
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
          margin: "15px 0"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Renderização Condicional</h1>
        <ConditionalRender/>
      </div>
    </div>
  );
}

export default App;
