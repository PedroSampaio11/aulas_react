/** @format */
// componente
const RenderFunction = () => {
  // funçao
  const renderTest = (x ) => {
    if (x < 5) {
      return <p>Rendered</p>;
    } else {
      return <p>Not Rendered</p>;
    }
  };
  // resposta da funçao
  return (
    <>
      {renderTest(10)}
      {renderTest(2)}
    </>
  );
};

export default RenderFunction;
