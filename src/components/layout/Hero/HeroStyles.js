import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const SocialMedia = styled.div`
  z-index: 100;
  margin-top: 0.5rem;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }
`;

export const SocialIconLink = styled.a`
  display: inline-block;
  color: var(--saintOrange);
  font-size: clamp(0.5rem, 3vw, 2rem);
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    color: var(--ctaClr);
    transform: scale(1.3);
    transition: all 0.5s ease;
  }
`;

export const Here = styled(FaMapMarkerAlt)`
  width: 25px;
  height: 25px;
  color: red;
`;

const arrowButtons = css`
  width: 30px;
  height: 30px;
  color: var(--saintBlue);
  cursor: pointer;
  background-color: var(--darkClr);
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  display: none;

  @media (min-width: 600px) {
    display: block;
    width: 50px;
    height: 50px;
  }

  &:hover {
    background-color: var(--ctaClr);
    transform: scale(0.95);
  }
`;

export const Next = styled(IoArrowForward)`
  ${arrowButtons};
`;

export const Prev = styled(IoArrowBack)`
  ${arrowButtons};
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const HeroSlider = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;

export const HeroSlide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.5s linear;
  z-index: 100;
  position: relative;
`;

export const HeroInfo = styled.div`
  position: absolute;
  width: 40%;
  color: var(--darkClr);
  font-size: clamp(0.6rem, 3vw, 2rem);
  line-height: 1.1;
  text-align: ${(props) => (props.side === "right" ? "right" : "left")};
  top: 30%;
  ${(props) => (props.side === "right" ? "right: 10px;" : "left: 10px;")};

  @media (min-width: 600px) {
    ${(props) => (props.side === "right" ? "right: 30px;" : "left: 30px;")};
  }

  /* transform: translate(-50%, -50%); */
`;

export const HeroImage = styled.img`
  width: 100%;
  vertical-align: top;
  /* height: auto; */
`;

export const SlideButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 100;
`;
