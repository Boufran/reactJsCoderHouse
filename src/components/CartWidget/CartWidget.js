import chango from "../../carrito.png";

const CartWidget = ({ carrito }) => {
  return (
    <div className="div-logo">
      <img src={chango} className="carrito"></img>
    </div>
  );
};

export default CartWidget;
