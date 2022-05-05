import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: rgb(255, 105, 0, 0.3);
  }

  table th,
  tfoot td {
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    background-color: var(--saintOrange);
    color: white;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.2rem;

    input {
      margin-left: 1rem;
      height: 2rem;
    }
  }

  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    padding: 2px;
    font-size: 1.2rem;
    box-shadow: none;
  }

  .flex__center {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > * {
      margin-right: 1rem;
    }

    .goto {
      width: 350px;

      input {
        width: 50px;
        display: inline;
        height: 2rem;
        box-shadow: none;
        outline: none;
      }
    }

    select {
      height: 2rem;
    }
  }

  button {
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    display: block;
    &:hover {
      background-color: var(--ctaClr);
    }
  }
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
