import City from "api/models/city";
import CityItem from "../item";
import React from "react";
import renderer from "react-test-renderer";

describe("City item", () => {
  describe("Snaphosts", () => {
    function getMyTreeComponent(props = {}) {
      return renderer
        .create(
          <CityItem
            city={new City({ city: "Paris", state: "Ile de France" })}
            {...props}
          />
        )
        .toJSON();
    }
    it("renders", () => {
      expect(getMyTreeComponent()).toMatchSnapshot();
    });

    it("renders with as prop", () => {
      expect(getMyTreeComponent({ as: "div" })).toMatchSnapshot();
    });
  });
});
