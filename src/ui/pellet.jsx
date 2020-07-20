import Colors from "styles/colors";
import styled from "styled-components";

const Pellet = styled.div`
  background-color: ${(props) => (props.negative ? Colors.Red : Colors.Green)};
  border-radius: 50%;
  float: right;
  font-size: 12px;
  font-weight: bold;
  height: 55px;
  padding-top: 20px;
  position: absolute;
  right: 2em;
  text-align: center;
  top: 3.7em;
  width: 55px;
`;

export default Pellet;
