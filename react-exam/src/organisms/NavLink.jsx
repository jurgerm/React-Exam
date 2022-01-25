import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;
export default NavLink;

