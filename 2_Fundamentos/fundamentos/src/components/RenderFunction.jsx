/** @format */

const RenderFunction = () => {
  const renderTest = (x ) => {
    if (x < 5) {
      return <p>Rendered</p>;
    } else {
      return <p>Not Rendered</p>;
    }
  };
  return (
    <>
      {renderTest(10)}
      {renderTest(2)}
    </>
  );
};

export default RenderFunction;
