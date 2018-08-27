// import { expect } from 'chai';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';

// in your test:
const renderersh = new ShallowRenderer();

const CoolComponent = ({ greeting }) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

// describe('CoolComponent', () => {

//   it('should ...', () => {
//     // create shallow render
//     renderersh.render(<CoolComponent greeting='hello guy' />);
//     const output = renderer.getRenderOutput();
//     console.log(output.props);
//   });

// });

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CoolComponent with greeting', () => {
  // whenever the componnet will be changing, use snapshot
  const component = renderer.create(
    <CoolComponent greeting="hello guy" />,
  );

  const tree = component.toJSON();
  // console.log(tree);
  expect(tree).toMatchSnapshot();
  expect(tree.type).toEqual('div');
});

test('CoolComponent with greeting 2', () => {
  renderersh.render(<CoolComponent greeting="hello guy" />);
  const output = renderersh.getRenderOutput();
  expect(output.type).toEqual('div');
});
