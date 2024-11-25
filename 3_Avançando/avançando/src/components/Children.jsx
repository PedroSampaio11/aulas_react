import PropTypes from "prop-types";
const Container = ({children}) => {
  return (
    <>
      <h2>Conteudo do componente pai: </h2>
      {children}
    </>
  )
}

Container.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Container