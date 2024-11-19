
import PropTypes from "prop-types";

const Destructuring = ({brand, model}) => {
  return (
    <div>
      <p>Essa é uma {brand}</p>
      <p>Modelo {model}</p>
    </div>
  );
};

// Definindo PropTypes para o componente
Destructuring.propTypes = {
  brand: PropTypes.string.isRequired, // Valida que 'brand' deve ser uma string e é obrigatória
  model: PropTypes.string.isRequired, 
};

export default Destructuring;
