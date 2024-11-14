const ConditionalRender = () => {
  const x = 5;
  return (
    <div>
      <h3> Isso será exibido? </h3>
      {x <= 5 && <p>sim, o número é: {x} </p>}
    </div>
  );
};

export default ConditionalRender;
