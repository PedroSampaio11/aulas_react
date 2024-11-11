/** @format */

const Teste = () => {
  const oriental = {
    type: "oriental",
    origin: "japan",
    wit: "fundos de elementos",
  };

  return (
    <>
      <h2 className="test">
        tipo da imagem: <span>{oriental.type}</span>
      </h2>
      <h2 className="test">
        origem da imagem: <span>{oriental.origin}</span>
      </h2>
      <h2 className="test">
        significado: <span>{oriental.wit}</span>
      </h2>
    </>
  );
};

export default Teste;
