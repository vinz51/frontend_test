import { act } from "react-dom/test-utils";
import App from "../app";
import CityItem from "../components/cities/item";
import { MoreButton } from "ui/buttons";
import { mount } from "enzyme";
import { Popup } from "react-leaflet";
import React from "react";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = global.document.createElement("div");
    global.document.body.appendChild(wrapper);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("loads more city", () => {
    const myComponent = mount(<App />, { attachTo: wrapper });

    expect(myComponent.find(CityItem)).toHaveLength(50);

    act(() => {
      myComponent.find(MoreButton).prop("onClick")();
    });

    myComponent.update();

    expect(myComponent.find(CityItem)).toHaveLength(100);
  });

  it("toggles popup", () => {
    const myComponent = mount(<App />, { attachTo: wrapper });

    expect(myComponent.find(Popup)).toHaveLength(0);

    act(() => {
      myComponent.find(CityItem).at(2).prop("onClick")();
    });

    myComponent.update();

    expect(myComponent.find(Popup)).toHaveLength(1);

    act(() => {
      myComponent.find(Popup).prop("onClose")();
    });

    myComponent.update();

    expect(myComponent.find(Popup)).toHaveLength(0);
  });
});
