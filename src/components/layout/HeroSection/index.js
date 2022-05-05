import { useContext } from "react";

import { AuthContext } from "../../../hooks/contexts/AuthContext";
import Imagen from "../../../assets/image/pictures/img-12.jpg";
import ImagenAdmin from "../../../assets/image/pictures/img-21.jpg";
import { Button } from "../../Button";

import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroTitle,
} from "./Hero.Styles";

const HeroSection = ({ bgImg = "public", user }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={bgImg === "Admin" ? ImagenAdmin : Imagen} alt="bg-images" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Bienvenido: {currentUser.user_name}</HeroTitle>
        <br />
        <Button to="/" onClick={(e) => logout(e)}>
          Cerrar sesión
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
