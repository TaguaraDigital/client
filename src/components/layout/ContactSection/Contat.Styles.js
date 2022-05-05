import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;

  background-color: ${(props) => props.bgClr};

  padding: 5rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    margin-bottom: 2rem;
  }
`;

export const ContactTitle = styled.h1`
  color: var(--saintBlue);
  font-size: 2.5rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ContactAddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContactInfo = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 1rem 1rem 1rem 0;
    width: 40%;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .logo {
    width: 200px;
  }
  .flag {
    width: 75px;
  }
`;

export const ContactMap = styled.div`
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const ContactText = styled.p`
  color: var(--saintBlue);
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    font-size: 1.2rem;
  }
`;
