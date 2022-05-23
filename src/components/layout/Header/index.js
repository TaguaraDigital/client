import React, { useState, useContext } from 'react';

import logo from '../../../assets/image/logos/saint_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { AuthContext } from '../../../hooks/contexts/AuthContext';

import {
  HeaderContainer,
  HeaderLogo,
  ToggleMenu,
  NavItems,
  NavLinks,
  NavLink,
  NavLinkR,
  ButtonLogin,
} from './Header.Styles';

const Header = ({ page = 'landing' }) => {
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
          {page === 'landing' && (
            <>
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
            </>
          )}

          {page === 'login' && (
            <NavLinks>
              <ButtonLogin to="/" onClick={handleShowToggleMenu}>
                Inicio
              </ButtonLogin>
            </NavLinks>
          )}

          {page === 'homeAdmin' && (
            <>
              <NavLinks>
                <NavLinkR to="/home" onClick={handleShowToggleMenu}>
                  Inicio
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLinkR to="/invoice" onClick={handleShowToggleMenu}>
                  Pagos X Confirmar
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLinkR to="/paymentconfirm" onClick={handleShowToggleMenu}>
                  Recibos Confirmados
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLinkR to="/register" onClick={handleShowToggleMenu}>
                  Crear Administrador
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLink to="contact" onClick={handleShowToggleMenu}>
                  Contacto
                </NavLink>
              </NavLinks>
              <NavLinks>
                <ButtonLogin to="/" onClick={(e) => logout(e)}>
                  Cerrar sesión
                </ButtonLogin>
              </NavLinks>
            </>
          )}

          {page === 'home' && (
            <>
              <NavLinks>
                <NavLinkR to="/home" onClick={handleShowToggleMenu}>
                  Inicio
                </NavLinkR>
              </NavLinks>
              <NavLinks>
                <NavLinkR to="/invoice" onClick={handleShowToggleMenu}>
                  Pagar Recibos
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLinkR to="/statements" onClick={handleShowToggleMenu}>
                  Estado de Cuenta
                </NavLinkR>
              </NavLinks>

              <NavLinks>
                <NavLinkR to="/user" onClick={handleShowToggleMenu}>
                  Actualizar Datos
                </NavLinkR>
              </NavLinks>
              <NavLinks>
                <NavLink to="contact" onClick={handleShowToggleMenu}>
                  Contacto
                </NavLink>
              </NavLinks>
              <NavLinks>
                <ButtonLogin to="/" onClick={(e) => logout(e)}>
                  Cerrar sesión
                </ButtonLogin>
              </NavLinks>
            </>
          )}
        </NavItems>

        <ToggleMenu onClick={handleShowToggleMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </ToggleMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
