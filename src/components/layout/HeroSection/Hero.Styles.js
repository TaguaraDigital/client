import styled from "styled-components";

export const HeroContainer = styled.section`
  margin: 0;
  height: calc(100vh - var(--header-height));
  position: relative;
  padding: 0 2rem;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(151, 202, 64, 1) 10%,
      rgba(151, 202, 64, 0.4) 20%,
      rgba(151, 202, 64, 0) 50%
    );
    top: 0;
    left: 0;
  }
`;

export const ImgBg = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  object-position: top center;
`;

export const HeroContent = styled.div`
  z-index: 30;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  padding: 1rem 2rem;
  color: var(--lightClr);
  background-color: rgba(151, 202, 64, 0.6);
  width: 100%;
  letter-spacing: 3px;
  font-size: clamp(1rem, 8vw, 3rem);

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroText = styled.p`
  color: var(--lightClr);
  max-width: 600px;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    font-size: 1.2rem;
  }
`;
