import React from 'react'

const SaboresPizza = ({alterarPizza}) => {
  const pizzas = [ "margherita", "brocolis", "queijo"]
  return (
    <div>
      <h2>Selecione o sabor da pizza</h2>
      <button onClick={()=> {
        alterarPizza(pizzas[0])
      }}> 1</button>
      <button onClick={()=> {
        alterarPizza(pizzas[1])
      }}> 2</button>
      <button onClick={()=> {
        alterarPizza(pizzas[2])
      }}> 3</button>
    </div>
  )
}

export default SaboresPizza