import renderer from "react-test-renderer";
import React from "react";
import Responsive from "../responsive";

describe("Responsive", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer
        .create(
          <Responsive xs={true} sm={true} md={true} lg={true}>
            Show the content
          </Responsive>
        )
        .toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
