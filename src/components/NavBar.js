import logo from "../logo.svg";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} className="logoNav" alt="logo" />
      <ul className="ulNav">
        <li>
          <a href="#">HOME</a>
        </li>

        <li>
          <a href="#">CONTACTO</a>
        </li>
        <li>
          <a href="#">TELEFONO</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
