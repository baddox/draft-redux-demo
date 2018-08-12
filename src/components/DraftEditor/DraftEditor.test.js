import React from "react";
import renderer from "react-test-renderer";
import DraftEditor from "./DraftEditor";

describe("DraftEditor", () => {
  xit("renders correctly", () => {
    const props = { exampleProp: true };
    const component = renderer.create(<DraftEditor {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
