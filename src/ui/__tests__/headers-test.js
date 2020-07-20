import Header, { H1Header } from "../headers";
import renderer from "react-test-renderer";
import React from "react";

describe("Headers", () => {
  describe("Snapshots", () => {
    it("renders header", () => {
      const myTreeComponent = renderer.create(<Header />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });

    it("renders title in header", () => {
      const myTreeComponent = renderer.create(<H1Header />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
