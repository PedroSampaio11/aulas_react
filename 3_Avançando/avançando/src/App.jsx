/** @format */

import "./App.css";
import Teste from "./components/Teste";
//  importando imagem
import img2 from "./assets/img2.png";
// importando hook
import Hook from "./components/Hook";
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

      <div className="hook" style={{ border: "1.5px solid", borderRadius: "8px" }}>
        <h1>hooks</h1>
        <Hook />
      </div>
    </div>
  );
}

export default App;
