import React from 'react';
import renderer from 'react-test-renderer';
import ComponentTemplate from './ComponentTemplate';

describe('ComponentTemplate', () => {
  it('renders correctly', () => {
    expect(false).toBeTruthy(); // Implement this test and remove this expect!
    const props = { exampleProp: true };
    const component = renderer.create(<ComponentTemplate {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
