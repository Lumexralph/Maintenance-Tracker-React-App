import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import NavLink from '../components/home/NavLink';

const renderer = new ShallowRenderer();

test('Test for NavLink component', () => {
  renderer.render(<NavLink text="Login" />);

  const component = renderer.getRenderOutput();

  expect(component.type).toEqual('li');

  expect(component.props.children.props.to).toEqual('/login');

  expect(component.props.children.props.className).toEqual('btn nav-btn nav-link');
});
