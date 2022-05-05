import styled from "styled-components";
import { Link } from "react-router-dom";

import myImage from "../../assets/image/pictures/login_bg.jpg";

export const Container = styled.section`
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${myImage}) no-repeat;
  background-size: cover;

  @media screen and (min-width: 639px) {
    padding: 1rem 10vw;
    align-items: flex-end;
  }
`;

export const Card = styled.article`
  height: 600px;
  width: 420px;
  max-width: 100%;
  padding: 1rem;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center;   */
  background-color: rgba(151, 200, 60, 0.3);
`;

export const Logo = styled.img`
  width: 300px;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--darkClr);
`;

export const SmallText = styled.p`
  font-size: 1.25rem;
  color: var(--darkClr);
`;

export const CardMsgs = styled.div`
  margin: 1rem 0;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0;
  padding: 0 1rem;

  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  border-bottom: 2px solid transparent;

  box-shadow: none;

  transition: all 0.5s ease-in-out;

  &::placeholder {
    color: rgba(200, 200, 200, 0.9);
  }

  &:not(:last-of-type) {
    border-bottom: 2px solid rgba(200, 200, 200, 0.3);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--saintBlue);
  }
`;

export const MuteLink = styled.p`
  font-size: 0.7rem;
  color: var(--saintBlue);
  text-decoration: none;
`;

export const BoldLink = styled(Link)`
  font-size: 0.85rem;
  color: var(--saintBlue);
  text-decoration: none;
  cursor: pointer;

  span {
    color: var(--ctaClr);
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.2rem;
  margin: 1rem 0;

  padding: 0.75rem 20%;
  background-color: var(--saintBlue);
  color: var(--lightClr);

  border: none;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--ctaInvClr);
  }
`;

export const FormField = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;

  label {
    font-size: 18px;
    display: block;
    font-weight: ;
  }

  input {
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0;
    padding: 0 1rem;

    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    border-radius: 5px;
    border-bottom: 2px solid transparent;

    box-shadow: none;

    transition: all 0.5s ease-in-out;

    &::placeholder {
      color: rgba(200, 200, 200, 0.9);
    }

    &:not(:last-of-type) {
      border-bottom: 2px solid rgba(200, 200, 200, 0.3);
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid var(--saintBlue);
    }
  }
`;
