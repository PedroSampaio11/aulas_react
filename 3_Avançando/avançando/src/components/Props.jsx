import PropTypes from "prop-types";
const Props = (props) => {
  return (
    <div>
      <h2>O nomedo user é: {props.user} </h2>
    </div>
  );
};

// Definindo PropTypes para o componente
Props.propTypes = {
  props: PropTypes.string.isRequired, // Valida que 'brand' deve ser uma string e é obrigatória
  user: PropTypes.string.isRequired,
};
export default Props;
