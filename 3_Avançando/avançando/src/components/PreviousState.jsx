/** @format */

import { useState } from "react";

const PreviousState = () => {
  const [persons, setPersons] = useState([
    { id: 1, nome: "pedro" },
    { id: 2, nome: "maria" },
    { id: 3, nome: "joao" },
    { id: 4, nome: "gabriel" },
    { id: 5, nome: "thais" },
  ]);

  // funçao para deletar
  const deletePerson = () => {
    const randomId = Math.floor(Math.random() * 6);
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== randomId)
    ); // Corrigido
  };

  return (
    <div>
      <h3>Lista de Pessoas: </h3>
      {persons.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
      <button onClick={deletePerson}> deletar pessoa </button>
    </div>
  );
};

export default PreviousState;
