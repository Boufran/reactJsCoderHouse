import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

import ClassComponent from "./components/ClassComponent/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent/FunctionalComponent";
import Boton from "./components/Boton/Boton";
import Contenedor from "./components/Contenedor/Contenedor";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const handleClick = () => {
    alert("Me dieron click");
  };
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ClassComponent titulo="Prop de componente de clase" />
        <FunctionalComponent
          titulo="Prop de componente de funcion"
          numero={3}
          booleano={true}
        />
        <Boton funcion={handleClick} /> */}
        <Contenedor />

        {/* <ItemListContainer greeting="hola" /> */}
      </header>
    </div>
  );
}

export default App;
