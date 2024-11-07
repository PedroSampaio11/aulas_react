/** @format */

const RenderFunction = () => {
  const renderTest = (x) => {
    if (x) {
      return <p>Rendered</p>;
    } else {
      return <p>Not Rendered</p>;
    }
  };
  return (
    <>
      {renderTest(true)}
      {renderTest(false)}
    </>
  );
};

export default RenderFunction;
