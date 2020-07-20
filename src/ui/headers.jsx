import { H1 } from "./titles";
import Colors from "styles/colors";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${Colors.LightBlue};
  box-shadow: 0px -3px 16px ${Colors.DarkerBlue};
  height: 50px;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1000;
`;

export const H1Header = styled(H1)`
  color: ${Colors.LighGrey};
  margin-top: 1em;
  text-align: center;
  text-transform: uppercase;
`;

export default Header;
