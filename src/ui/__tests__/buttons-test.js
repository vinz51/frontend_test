import renderer from "react-test-renderer";
import React from "react";
import Button from "../buttons";

describe("Button", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer
        .create(<Button>Call me</Button>)
        .toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });

    it("renders inverted", () => {
      const myTreeComponent = renderer
        .create(<Button label="call me" inverted={true} />)
        .toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
