/** @format */

import "./App.css";
// import first component
import FirstComponent from "./components/FIrstComponent";
// import template expression
import TemplateExpression from "./components/TemplateExpression";

function App() {
  return (
    <div className="App">
      <h1> meu hello world em jsx: </h1>
      <FirstComponent />
      <TemplateExpression />
    </div>
  );
}

export default App;
