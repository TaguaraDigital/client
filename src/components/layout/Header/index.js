import React, { useState, useContext } from "react";

import logo from "../../../assets/image/logos/saint_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import { AuthContext } from "../../../hooks/contexts/AuthContext";

import {
  HeaderContainer,
  HeaderLogo,
  ToggleMenu,
  NavItems,
  NavLinks,
  NavLink,
  NavLinkR,
  ButtonLogin,
} from "./Header.Styles";

const Header = ({ page = "landing" }) => {
  const { logout } = useContext(AuthContext);
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <img src={logo} alt="Logo" />
        </HeaderLogo>

        <NavItems
          onClick={handleShowToggleMenu}
          showToggleMenu={showMobileMenu}
        >
          <NavLinks>
            <NavLink to="home" onClick={handleShowToggleMenu}>
              Inicio
            </NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink to="contact" onClick={handleShowToggleMenu}>
              Contacto
            </NavLink>
          </NavLinks>
          <NavLinks>
            <ButtonLogin to="/login" onClick={handleShowToggleMenu}>
              Ingresar
            </ButtonLogin>
          </NavLinks>
        </NavItems>

        <ToggleMenu onClick={handleShowToggleMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </ToggleMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
