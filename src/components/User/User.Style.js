import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 90%;
  margin: 3rem auto 0;
  padding: 2rem 1rem 1rem;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  margin-bottom: 3rem;
  border: 5px double var(--saintBlue);
  padding: 1rem;

  &::before {
    content: attr(data-group-name);
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(-50%);
    background-color: var(--lightClr);
    font-weight: bold;
    padding: 0 1rem;
  }

  .long-txt {
    grid-column: span 1;
    @media (min-width: 600px) {
      grid-column: span 2;
    }
  }
`;

export const FormField = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1rem;

  label,
  input {
    margin-top: 0;
    padding: 0;
  }

  select {
    width: 100%;
    height: 2rem;
   
`;

export const RowBottons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;

  button {
    margin-top: 1rem;
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
