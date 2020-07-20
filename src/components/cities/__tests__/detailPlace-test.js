import CityMobileDetail, {
  CloseDetail,
  DetailPlace,
  Inhabitant,
} from "../detailPlace";
import City from "api/models/city";
import renderer from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";

describe("CloseDetail", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer.create(<CloseDetail />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});

describe("DetailPlace", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer.create(<DetailPlace />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});

describe("Inhabitant", () => {
  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer.create(<Inhabitant />).toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });
});

describe("CityMobileDetail", () => {
  const myCity = new City({
    city: "Paris",
    state: "Ile de France",
    population: "2148000",
    growth_from_2000_to_2013: "3.33%",
  });

  describe("Snapshots", () => {
    it("renders", () => {
      const myTreeComponent = renderer
        .create(<CityMobileDetail city={myCity} />)
        .toJSON();

      expect(myTreeComponent).toMatchSnapshot();
    });
  });

  describe("Actions", () => {
    it("triggers onClose event", () => {
      const myOnClose = jest.fn();
      const myComponent = shallow(
        <CityMobileDetail city={myCity} onClose={myOnClose} />
      );

      expect(myOnClose).not.toHaveBeenCalled();

      myComponent.find(CloseDetail).simulate("click");

      expect(myOnClose).toHaveBeenNthCalledWith(1);

      myOnClose.mockClear();
    });
  });
});
