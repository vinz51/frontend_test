import { animated, useTransition } from "react-spring";
import TitleBold, { SubTitleBold } from "ui/titles";
import City from "api/models/city";
import Colors from "styles/colors";
import Pellet from "ui/pellet";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const CloseDetail = styled.span`
  float: right;
  padding: 0.4em 0.8em 0.6em;
  border-radius: 50%;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: ${Colors.Grey};
  }
`;

export const DetailPlace = styled(animated.div)`
  background-color: white;
  bottom: 0;
  box-shadow: 0px 6px 16px ${Colors.DarkerBlue};
  min-height: 128px;
  padding: 0.5em;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const Inhabitant = styled.p`
  color: ${Colors.DarkerBlue};
`;

const CityMobileDetail = ({ city, onClose }) => {
  const transitions = useTransition(city, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <DetailPlace key={key} style={props}>
          <Pellet negative={item.isNegative()}>{item.statistics}</Pellet>
          <CloseDetail onClick={onClose}>x</CloseDetail>
          <TitleBold>{item.name}</TitleBold>
          <SubTitleBold>State of {item.state}</SubTitleBold>
          <Inhabitant>
            Inhabitant{+item.population > 0 ? "s" : ""} <b>{item.population}</b>
          </Inhabitant>
        </DetailPlace>
      )
  );
};

CityMobileDetail.propTypes = {
  city: PropTypes.instanceOf(City),
  onClose: PropTypes.func,
};

CityMobileDetail.defaultProps = {
  city: null,
  onClose: null,
};

export default CityMobileDetail;
