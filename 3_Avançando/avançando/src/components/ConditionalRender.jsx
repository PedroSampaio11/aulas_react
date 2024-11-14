const ConditionalRender = () => {
  const x = 5;
  const nome = "pedro"
  return (
    <div>
      {/* Apenas uma opçao */}
      <h3> Isso será exibido? </h3>
      {x <= 5 && <p>sim, o número é: {x} </p>}
      {/* ternário */}
      <h3> Validação com operador ternário:</h3>
      { nome === "pedro" ? ( <p> Olá {nome}</p>) : ( <p>Usuário nao encontrado!</p>)}
    </div>
  );
};

export default ConditionalRender;
