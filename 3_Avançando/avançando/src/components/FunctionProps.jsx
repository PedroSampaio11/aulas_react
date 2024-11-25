import PropTypes from "prop-types";
const FunctionProps = ({myFunction}) => {

  return (
    <>
    <button onClick={myFunction}>Click me!</button>
    </>
  )
}
// Definindo PropTypes para o componente
FunctionProps.propTypes = {
  myFunction: PropTypes.string.isRequired,
};
export default FunctionProps