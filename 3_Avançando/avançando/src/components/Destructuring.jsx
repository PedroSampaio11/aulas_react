
import PropTypes from "prop-types";

const Destructuring = ({ brand, motor }) => {
  return (
    <div>
      <p> A marca do carro é {brand}</p>
      <p> E seu motor é: {motor}</p>
    </div>
  );
};

// Definindo PropTypes para o componente
Destructuring.propTypes = {
  brand: PropTypes.string.isRequired, // Valida que 'brand' deve ser uma string e é obrigatória
  motor: PropTypes.string.isRequired, 
};

export default Destructuring;
