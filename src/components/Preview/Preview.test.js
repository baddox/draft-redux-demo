import React from "react";
import renderer from "react-test-renderer";
import Preview from "./Preview";

describe("Preview", () => {
  xit("renders correctly", () => {
    const props = { exampleProp: true };
    const component = renderer.create(<Preview {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
