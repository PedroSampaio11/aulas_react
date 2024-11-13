/** @format */

import { useState } from "react";

const ListRender = () => {
  const [users, setUser] = useState([
    { id: 1, name: "Pedro" },
    { id: 2, name: "Thais" },
    { id: 3, name: "Maya" },
    { id: 4, name: "Tolia-Tolia"},
  ]);

  // funçao simples so para mostrar o uso da renderização com useState ( desconsiderar )
  const addName = () => {
    const newUser = {id:5, name: "turtle"}
    setUser((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div>
      {/* com key */}
      <ul>
        {/* alguns detalhes de estilo sem css */}
        {users.map((user) => (
          <li key={user.id} style={{ textAlign: "left", fontWeight: "bold" }}>
            Nome: <span style={{ fontWeight: "normal" }}>{user.name}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          addName();
        }}
      >
        Add Nome
      </button>
    </div>
  );
};

export default ListRender;
