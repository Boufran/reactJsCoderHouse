import "./styles.css";

const FunctionalComponent = ({ titulo, numero, booleano }) => {
  console.log(titulo);

  return (
    <div className="test-css">
      <h2>
        HOLA SOY {titulo} {numero}{" "}
      </h2>
    </div>
  );
};

export default FunctionalComponent;
