import TitleBold, { SubTitleBold } from "ui/titles";
import City from "api/models/city";
import Colors from "styles/colors";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Item = styled.li`
  background-color: ${(props) =>
    props.active ? Colors.LighGrey : Colors.White};
  cursor: pointer;
  padding: 0.5em;
  transition: background 1s ease;

  :hover {
    background-color: ${Colors.LighGrey};
  }
`;

const CityItem = ({ as, city, ...rest }) => {
  const Component = as || Item;
  return (
    <Component {...rest}>
      <TitleBold>{city.name}</TitleBold>
      <SubTitleBold>{city.state}</SubTitleBold>
    </Component>
  );
};

CityItem.propTypes = {
  as: PropTypes.elementType,
  city: PropTypes.instanceOf(City).isRequired,
};

CityItem.defaultProps = {
  as: null,
};

export default CityItem;
