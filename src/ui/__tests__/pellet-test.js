import Pellet from "../pellet";
import renderer from "react-test-renderer";
import React from "react";

describe("Pellet", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer.create(<Pellet />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
