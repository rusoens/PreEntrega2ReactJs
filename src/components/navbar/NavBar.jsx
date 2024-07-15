import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget.jsx';
import Menu from './Menu.jsx';
import Valor from './ValorFijo.jsx';
import "../../style.css";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg flex-row">
        <div className="container-fluid justify-content-between">
          <Link to="/"> <Logo /></Link>
          <Menu
            menu1="Home"
            menu2="Dragon Ball"
            menu3="South Park"
            menu4="Saint Seiya"
          />
          <div className="d-flex align-items-center flex-column">
            <CartWidget />
            <Valor />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

