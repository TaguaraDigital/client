import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const DashboardContainer = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const DashboardCard = styled.article`
  background-color: lightblue;
  width: 100%;
  height: 400px;
`;

export const DashboardChart = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 60%;
`;

export const DashboardLink = styled(LinkR)`
  cursor: pointer;

  img {
    display: block;
    max-width: 100%;
  }
`;
