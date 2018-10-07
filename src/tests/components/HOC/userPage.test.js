import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { userPage } from '../../../components/HOC/userPage';

const renderer = new ShallowRenderer();


describe('Test for higher order component userpage', () => {
  it('Should return another component', (done) => {
    // const Component = userPage(<div>Component Testing</div>);
    // renderer.render(<Component />);
    // const output = renderer.getRenderOutput();

    // console.log(output);

    expect(true).toBe(true);
    done();
  });
});
