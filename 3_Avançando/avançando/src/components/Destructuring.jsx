
import PropTypes from "prop-types";

const Destructuring = ({brand, year}) => {
  return (
    <div>
      <p>Esse é um {brand}, ano {year}</p> 
    </div>
  );
};

// Definindo PropTypes para o componente
Destructuring.propTypes = {
  brand: PropTypes.string.isRequired, // Valida que 'brand' deve ser uma string e é obrigatória
  year: PropTypes.number.isRequired, 
};

export default Destructuring;
