import City from "api/models/city";
import CityItem from "../item";
import CitiesList from "../list";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import React from "react";

describe("CitiesList", () => {
  const cities = [
    new City({
      city: "Paris",
      rank: "1",
      state: "Ile de France",
    }),
    new City({
      city: "Reims",
      rank: "42",
      state: "Marne",
    }),
  ];

  describe("Snaphosts", () => {
    function getMyTreeComponent(props = {}) {
      return renderer.create(<CitiesList {...props} />).toJSON();
    }

    it("renders", () => {
      expect(getMyTreeComponent()).toMatchSnapshot();
    });

    it("renders with cities", () => {
      expect(getMyTreeComponent({ cities })).toMatchSnapshot();
    });
  });

  describe("Actions", () => {
    it("clicks on the cityItem", () => {
      const myOnCityClick = jest.fn();
      const myComponent = mount(
        <CitiesList cities={cities} onCityClick={myOnCityClick} />
      );

      expect(myComponent.find(CityItem).at(0).prop("active")).toBe(false);
      expect(myComponent.find(CityItem).at(1).prop("active")).toBe(false);

      // triggers the onClick on the item
      myComponent.find(CityItem).at(0).prop("onClick")();

      expect(myOnCityClick).toHaveBeenNthCalledWith(1, cities[0]);

      // Update component to set active city
      myComponent.setProps({ city: cities[0] });
      myComponent.update();

      // Expect that the clicked city is well activated
      expect(myComponent.find(CityItem).at(0).prop("active")).toBe(true);
      expect(myComponent.find(CityItem).at(1).prop("active")).toBe(false);
    });
  });
});
