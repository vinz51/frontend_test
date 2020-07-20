import Colors from "styles/colors";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.inverted ? Colors.LightBlue : Colors.White};
  border: 1px solid
    ${(props) => (props.disabled ? Colors.Grey : Colors.LightBlue)};
  border-radius: 6px;
  color: ${(props) =>
    props.disabled
      ? Colors.Grey
      : props.inverted
      ? Colors.White
      : Colors.LightBlue};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  outline: none;
  padding: 0.5em;
  transition: all 0.8s ease;
  width: 100%;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.inverted ? Colors.White : Colors.LightBlue};
    color: ${(props) => (props.inverted ? Colors.LightBlue : Colors.White)};
  }
`;

/**
 * @function Button
 * @description create button for the app
 * @param {ReactElement} children - Add children
 * @param {ReactElement} label - Add label instead of children
 * @param {Object} rest - Add all props to the button
 * @param {Boolean} [rest.inverted=undefined] - Invert the button's design
 */
const Button = ({ children, label, ...rest }) => (
  <ButtonStyled {...rest}>{children || label}</ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};

Button.defaultProps = {
  children: null,
  label: null,
};

export const MoreButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;

export default Button;
