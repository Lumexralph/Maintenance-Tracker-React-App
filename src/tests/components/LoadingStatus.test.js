import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LoadingStatus from '../../components/LoadingStatus';

const renderer = new ShallowRenderer();

describe('Test for Loader component', () => {
  it('Should render the Loader when status is true', (done) => {
    renderer.render(<LoadingStatus
      status
      text="Testing Component"
    />);

    const output = renderer.getRenderOutput();
    expect(output.props.type).toBe('bubbles');
    expect(output.props.color).toBe('lightblue');
    done();
  });

  it('Should not render the Loader when status is false', (done) => {
    renderer.render(<LoadingStatus
      status={false}
      text="Testing Component"
    />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('p');
    expect(output.props.children).toBe('Testing Component');
    done();
  });

  it('Should not render when status and text is false', (done) => {
    renderer.render(<LoadingStatus
      status={false}
      text=""
    />);

    const output = renderer.getRenderOutput();
    expect(output).toBe(null);
    done();
  });
});
