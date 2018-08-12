import React from "react";
import renderer from "react-test-renderer";
import Publish from "./Publish";

describe("Publish", () => {
  xit("renders correctly", () => {
    const props = { exampleProp: true };
    const component = renderer.create(<Publish {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
