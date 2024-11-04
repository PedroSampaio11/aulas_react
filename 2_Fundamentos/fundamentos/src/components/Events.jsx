/** @format */

const Events = () => {
  const clickFunction = (e) => {
    console.log(e)
    console.log("Button clicked");
  };
  return (
    <>
    <span>botão sem função</span>
      <button
        onClick={() => {
          console.log("testando");
        }}
      >
        Click
      </button>

      <div>
        <span>botão com função</span>
        <button onClick={clickFunction}>Click Me</button>
      </div>
      {/* evento com funçao */}
    </>
  );
};

export default Events;
