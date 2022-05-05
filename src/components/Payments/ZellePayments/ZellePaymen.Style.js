import styled from "styled-components";

export const ZelleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
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

  input,
  select {
    display: block;
    height: 35px;
    width: 100%;
    margin: 0;
    border: none;
    padding: 10px;
    font-size: 16px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  }
`;

export const RowBottons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;

  button {
    margin-top: 1rem;
    margin-right: 2rem;
    background: var(--saintGreen);
    cursor: pointer;
    transition: 0.2s linear;

    &:last-child {
      background: var(--ctaClr);
    }

    &:hover {
      transform: scale(0.95);
    }
  }
`;

export const ImgSelected = styled.img`
  position: absolute;
  top: 200px;
  right: 200px;
  z-index: 100;
  width: 300px;
  height: 300px;
  border: 2px solid red;
  object-fit: contain;
  object-position: center;
`;

export const InputFile = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid red;
`;
