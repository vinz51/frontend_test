import TitleBold, { SubTitleBold, H1, Bold } from "../titles";
import renderer from "react-test-renderer";
import React from "react";

describe("Titles", () => {
  describe("Snapshots", () => {
    it.each([
      ["title in bold", TitleBold],
      ["subtitle in bold", SubTitleBold],
      ["bold", Bold],
      ["h1", H1],
    ])("renders %s", (title, Component) => {
      const myTreeComponent = renderer
        .create(<Component>Title</Component>)
        .toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});
