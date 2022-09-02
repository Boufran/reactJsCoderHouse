import Titulo from "../Titulo/Titulo";
import FunctionalComponent from "../FunctionalComponent/FunctionalComponent";
import Boton from "../Boton/Boton";
const Contenedor = () => {
  const estaEsLaFuncion = () => {
    console.log("HOLA MUNDO!");
  };
  return (
    <div>
      <Titulo titulo="Soy un contenedor" />
      <FunctionalComponent titulo={"Hola"} numero={10} booleano={false} />
      <Boton funcion={estaEsLaFuncion} />
    </div>
  );
};

export default Contenedor;
