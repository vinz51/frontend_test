import Header, { H1Header } from "ui/headers";
import MapContainer, { CitiesBlock } from "components/map/container";
import City from "api/models/city";
import CitiesList from "components/cities/list";
import CityMobileDetail from "components/cities/detailPlace";
import React from "react";
import Responsive from "ui/responsive";
import citiesData from "data/cities.json";
import MainContainer from "ui/blocks";

const cities = citiesData.map((city) => new City(city));

const App = () => {
  const [city, setCity] = React.useState();
  const [position, setPosition] = React.useState([40.7127837, -74.0059413]);

  const handleClick = React.useCallback(
    (city) => {
      setCity(city);
      setPosition(city.position);
    },
    [setCity, setPosition]
  );

  const onClose = React.useCallback(() => setCity(), [setCity]);

  return (
    <>
      <Header>
        <H1Header>Cities placed on map</H1Header>
      </Header>
      <main>
        <MainContainer>
          <CitiesBlock sm md lg>
            <CitiesList city={city} cities={cities} onCityClick={handleClick} />
          </CitiesBlock>
          <MapContainer
            position={position}
            city={city}
            onPopupClose={onClose}
            onClick={handleClick}
            cities={cities}
          />
        </MainContainer>
      </main>
      <Responsive xs>
        <CityMobileDetail city={city} onClose={onClose} />
      </Responsive>
    </>
  );
};

export default App;
