import "./stylesboton.css";
const Boton = ({ funcion }) => {
  return (
    <button onClick={funcion} className="btn-test">
      Boton
    </button>
  );
};

export default Boton;
