import React from "react";
import renderer from "react-test-renderer";
import TopBarDraftStatus from "./TopBarDraftStatus";

describe("TopBarDraftStatus", () => {
  xit("renders correctly", () => {
    const props = { exampleProp: true };
    const component = renderer.create(<TopBarDraftStatus {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
