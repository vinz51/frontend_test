import City from "api/models/city";
import Colors from "styles/colors";
import { MoreButton } from "ui/buttons";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import CityItem from "./item";

const ListContainer = styled.ul`
  background-color: ${Colors.White};
  height: auto;
  list-style: none;
  margin: 0;
  max-height: 440px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0;
  word-break: break-word;
`;

export const CitiesLength = styled.span`
  display: block;
  font-size: 0.6em;
`;

const CitiesList = ({ onCityClick, cities, city, ...rest }) => {
  const [citiesShown, setCitiesShown] = React.useState([]);

  const loadNextCities = React.useCallback(
    (start = 0, limit = 50) => {
      // we need a start index with valid data to
      // return data
      if (!cities[start]) {
        return;
      }

      const nextCities = [...citiesShown];

      for (let i = start; i < start + limit; i++) {
        if (cities[i]) {
          nextCities.push(cities[i]);
        }
      }

      setCitiesShown(nextCities);
    },
    [cities, citiesShown, setCitiesShown]
  );

  React.useEffect(() => {
    if (!citiesShown.length) {
      loadNextCities();
    }
  }, [citiesShown, loadNextCities]);

  return (
    <>
      <ListContainer cities={cities} {...rest}>
        {citiesShown.map((currentCity) => (
          <CityItem
            active={city ? city.rank === currentCity.rank : false}
            key={currentCity.rank}
            city={currentCity}
            onClick={() => {
              if (onCityClick) {
                onCityClick(currentCity);
              }
            }}
          />
        ))}
      </ListContainer>
      <MoreButton
        disabled={cities.length <= citiesShown.length}
        onClick={() => loadNextCities(citiesShown.length)}
      >
        See more
        {citiesShown.length !== cities.length ? (
          <CitiesLength>
            {citiesShown.length}/{cities.length}
          </CitiesLength>
        ) : null}
      </MoreButton>
    </>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.instanceOf(City)),
  city: PropTypes.instanceOf(City),
  onCityClick: PropTypes.func,
};

CitiesList.defaultProps = {
  cities: [],
  city: null,
  onCityClick: null,
};

export default CitiesList;
