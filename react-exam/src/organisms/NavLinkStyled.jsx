import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: black;
  text-decoration: none;
  &.active
  {
    border-bottom: solid var(--main-color) 1px;
  }
  `;
export default NavLinkStyled;

