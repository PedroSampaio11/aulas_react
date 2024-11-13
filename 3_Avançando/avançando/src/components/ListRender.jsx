/** @format */

import { useState } from "react";

const ListRender = () => {
  const [users, setUser] = useState([
    { id: 1, name: "Pedro", age: 22 },
    { id: 2, name: "Thais", age: 21 },
    { id: 3, name: "Maya", age: 1.5 },
    { id: 4, name: "Tolia-Tolia", age: 5 },
  ]);

  const addName = ()=>{
    setUser(...users, "NovoNome")
  }
  return (
    <div>
      {/* <h1>Lista de Nomes</h1>
      {/* sem key  */}
      {/* <ul>
        {persons.map((person) => (
          <li>{person}</li>
        ))}
      </ul> */}

      {/* com key */}
      <ul>
        {/* alguns detalhes de estilo sem css */}
        {users.map((user) => (
          <li key={user.id} style={{textAlign: "left", fontWeight: "bold"}}>
           Nome: <span style={{fontWeight:"normal"}}>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
