import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const NavLink = css`
  color: var(--lightClr);
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  cursor: pointer;
`;

export const Button = styled(Link)`
  ${NavLink}
  font-size: ${(props) => (props.big ? "1.5rem" : ".85rem")};
  padding: ${(props) => (props.big ? "1rem 2rem" : ".5rem 1rem")};
  background-color: ${(props) =>
    props.primary ? "var(--ctaInvClr)" : "var(--ctaClr)"};
  color: ${(props) => (props.primary ? "var(--lightClr)" : "var(--ctaClr)")};
  color: var(--lightClr);
  border-radius: 5px;
  white-space: nowrap;
  outline: none;
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--ctaClr)" : "var(--saintPurple)"};
    color: ${(props) =>
      props.primary ? "var(--ctaInvClr)" : "var(--lightClr)"};
    color: var(--lightClr);
    transform: scale(0.95);
  }
`;
