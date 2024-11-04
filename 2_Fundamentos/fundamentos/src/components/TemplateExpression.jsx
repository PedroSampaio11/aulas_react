/** @format */
//  hierarquia
import Hierarquia from "./Hierarquia";
// template expression
const TemplateExpression = () => {
  const data = {
    name: "Pedro",
    job: "FullStack Developer",
    age: 22,
  };
  return (
    <>
      <p>
        aqui estão informações sobre mim: <br />
        meu nome é {data.name}, eu sou {data.job} e tenho {data.age} anos
      </p>
      <Hierarquia/>
    </>
  );
};

export default TemplateExpression;
