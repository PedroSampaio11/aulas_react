/** @format */

import "./App.css";
// import first component
import FirstComponent from "./components/FIrstComponent";
// import template expression
import TemplateExpression from "./components/TemplateExpression";
//  hierarquia
import Hierarquia from "./components/Hierarquia";
// events
import Events from "./components/Events";
// renderização
import RenderFunction from "./components/RenderFunction";

function App() {
  return (
    <div className="App">
      <h1> meu hello world em jsx: </h1>
      <FirstComponent />
      <br />
      <h2>template expression </h2>
      <TemplateExpression />
      <br />
      <h2>hierarquia ⬆️⬇️</h2>
      <Hierarquia />
      <br />
      <h2>eventos</h2>
      <Events />
      <br />
      <h2> renderização</h2>
      <RenderFunction />
    </div>
  );
}

export default App;
