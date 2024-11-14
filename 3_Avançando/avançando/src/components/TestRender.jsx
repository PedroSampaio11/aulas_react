/** @format */

import { useState } from "react";

const TestRender = () => {
  const [persons] = useState([
    {
      nome: "Pedro",
      idade: 22,
      id: 1
    }, 
    {
      nome: "Thais", 
      idade: 21,
      id: 2
    }
  ]);
  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {
          persons.map((user)=> (
            <li key={user.id}> {user.nome} - {user.idade}</li>
          ))
        }
      </ul>
    </div>
  )
};

export default TestRender;
