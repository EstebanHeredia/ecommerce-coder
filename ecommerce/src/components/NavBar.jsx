import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/elemento1" activeStyle>
            Elemento 1
          </NavLink>
          <NavLink to="/elemento2" activeStyle>
            Elemento 2
          </NavLink>
          <NavLink to="/elemento3" activeStyle>
            Elemento 3
          </NavLink>
          <NavLink to="/elemento4" activeStyle>
            Elemento 4
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/iniciar">Iniciar sesión</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
