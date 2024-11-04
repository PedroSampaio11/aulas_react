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

function App() {
  return (
    <div className="App">
      <h1> meu hello world em jsx: </h1>
      <FirstComponent />
      <TemplateExpression />  
      <Hierarquia/>
      <Events/>
    </div>
  );
}

export default App;
