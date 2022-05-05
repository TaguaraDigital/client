import styled from "styled-components";

export const PayMethodContainer = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;

  @media screen and (min-width: 600px) {
    width: 80%;
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const PayMethodSummary = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    span {
      width: 100%;
      margin-right: 1rem;
      text-align: end;
    }

    .first-column {
      text-align: start;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;

    &:last-child,
    &:first-child {
      font-weight: bold;
    }
  }
`;

export const PayMethodButtonsContainer = styled.div``;

export const PayMethodButtons = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .radio-button {
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 30px;

    input {
      width: 15px;
      height: 15px;
      margin-top: 0;
      margin-right: 0.5rem;
      box-shadow: none;
    }
  }
`;

export const PayButton = styled.button`
  margin-right: 2rem;
  background-color: ${(props) => (props.bgClr ? props.bgClr : "yellow")};
`;

export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
