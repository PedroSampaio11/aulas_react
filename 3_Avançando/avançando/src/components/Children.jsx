import PropTypes from "prop-types";
const Container = ({children, childreen}) => {
  return (
    <>
      <h2>Conteudo do componente pai: </h2>
      {children}
      <h2>outro</h2>
      {childreen}
    </>
  )
}

Container.propTypes = {
  children: PropTypes.string.isRequired,
  childreen: PropTypes.string.isRequired,
};
export default Container