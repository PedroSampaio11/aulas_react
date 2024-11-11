import './App.css'
import Teste from './components/Teste'
//  importando imagem
import img2 from "./assets/img2.png"
function App() {

  return (
    <div className='App'>
      <Teste/>
      <h1> teste </h1>
      {/* Imagem em public */}
      <h2> Imagem em public</h2>
      <img src="./img1.jpg" alt="" />
      {/* imagem em assets */}
      <h2> Imagem em assets</h2>
      <img src={img2} alt="" />
    </div>
  )
}

export default App
