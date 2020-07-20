import Sizes from "../styles/sizes";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  display: ${(props) => (props.xs || props.all ? "block" : "none")};

  @media screen and (min-width: ${Sizes.SM}) {
    display: ${(props) => (props.sm || props.all ? "block" : "none")};
  }

  @media screen and (min-width: ${Sizes.MD}) {
    display: ${(props) => (props.md || props.all ? "block" : "none")};
  }

  @media screen and (min-width: ${Sizes.LG}) {
    display: ${(props) => (props.lg || props.all ? "block" : "none")};
  }
`;

const Responsive = ({ children, ...rest }) => (
  <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
);

Responsive.propTypes = {
  children: PropTypes.node,
};

Responsive.defaultProps = {
  children: null,
};

export default Responsive;
