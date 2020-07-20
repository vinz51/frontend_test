import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import CityItem from "components/cities/item";
import City from "api/models/city";
import PropTypes from "prop-types";
import React from "react";
import Responsive from "ui/responsive";
import Sizes from "styles/sizes";
import styled from "styled-components";

// Solutions found in https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export const CitiesBlock = styled(Responsive)`
  @media screen and (min-width: ${Sizes.SM}) {
    position: relative;
    width: 30%;
    margin-right: 4%;
  }
`;

export const MapContainer = ({
  city,
  cities,
  onClick,
  onPopupClose,
  position,
}) => (
  <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <CitiesBlock sm md lg>
      {city ? (
        <Popup position={city.position} onClose={onPopupClose}>
          <CityItem as="div" city={city} />
        </Popup>
      ) : null}
    </CitiesBlock>
    {cities.map((city) => (
      <Marker
        key={city.rank}
        position={city.position}
        onClick={() => {
          if (onClick) {
            onClick(city);
          }
        }}
      />
    ))}
  </Map>
);

MapContainer.propTypes = {
  city: PropTypes.instanceOf(City),
  cities: PropTypes.arrayOf(PropTypes.instanceOf(City)),
  onClick: PropTypes.func,
  onPopupClose: PropTypes.func,
  position: PropTypes.array,
};

MapContainer.defaultProps = {
  city: null,
  cities: [],
  onClick: null,
  onPopupClose: null,
  position: [],
};

export default MapContainer;
