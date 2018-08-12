import React from "react";
import renderer from "react-test-renderer";
import TopBar from "./TopBar";

describe("TopBar", () => {
  xit("renders correctly", () => {
    const props = { exampleProp: true };
    const component = renderer.create(<TopBar {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
