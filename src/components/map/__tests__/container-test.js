import { Marker, Popup } from "react-leaflet";
import City from "api/models/city";
import MapContainer from "../container";
import { mount } from "enzyme";
import React from "react";

describe("MapContainer", () => {
  const cities = [
    new City({
      city: "Paris",
      rank: "1",
      state: "Ile de France",
      latitude: 48.8534,
      longitude: 2.3488,
    }),
    new City({
      city: "Reims",
      rank: "42",
      state: "Marne",
      latitude: 49.25,
      longitude: 4.0333,
    }),
  ];

  describe("Actions", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = global.document.createElement("div");
      global.document.body.appendChild(wrapper);
    });

    afterEach(() => {
      wrapper = null;
    });

    it("actives popup", () => {
      const myOnClick = jest.fn();
      const myComponent = mount(
        <MapContainer
          onClick={myOnClick}
          cities={cities}
          position={[49.25, 4.0333]}
        />,
        { attachTo: wrapper }
      );

      expect(myComponent.find(Popup)).toHaveLength(0);

      myComponent.find(Marker).at(1).prop("onClick")();

      expect(myOnClick).toHaveBeenNthCalledWith(1, cities[1]);

      myComponent.setProps({ city: cities[1] });
      myComponent.update();

      expect(myComponent.find(Popup)).toHaveLength(1);
    });

    it("closes popup", () => {
      const myOnPopupClose = jest.fn();
      const myComponent = mount(
        <MapContainer
          onPopupClose={myOnPopupClose}
          cities={cities}
          city={cities[1]}
          position={[49.25, 4.0333]}
        />,
        { attachTo: wrapper }
      );

      myComponent.find(Popup).prop("onClose")();

      expect(myOnPopupClose).toHaveBeenNthCalledWith(1);

      myComponent.setProps({ city: null });
      myComponent.update();

      expect(myComponent.find(Popup)).toHaveLength(0);
    });
  });
});
