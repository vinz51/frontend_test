import renderer from "react-test-renderer";
import React from "react";
import MainContainer from "../blocks";

describe("MainContainer", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer.create(<MainContainer />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
