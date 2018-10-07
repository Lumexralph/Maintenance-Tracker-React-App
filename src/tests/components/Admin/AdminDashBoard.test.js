import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminDashBoard, mapDispatchToProps, mapStateToProps } from '../../../components/Admin/AdminDashBoard';
import data from '../../__mocks__/requestsData';

describe('Test for AdminDashBoard', () => {
  const loadRequests = Promise.resolve(data);
  const adminAction = Promise.resolve({});
  let component = renderer.create(
    <Router>
      <AdminDashBoard
        requests={data}
        loadAdminRequests={() => loadRequests}
        storeUserRequests={requests => requests}
        adminAction={() => adminAction}
      />
    </Router>,
  );

  let componentInstance = component.root;

  let tree = component.toJSON();

  it('Should render properly on change and cick event', (done) => {
    // call the onChange event
    expect(tree).toMatchSnapshot();
    componentInstance.findByType('select').props.onChange({ target: { value: '' } });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // call click event on accept button
    componentInstance.findAllByType('button')[0].props.onClick({ target: { value: '' } }, {});
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // call click event on reject button
    componentInstance.findAllByType('button')[1].props.onClick({ target: { value: '' } }, {});
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // call click event on resolve button
    componentInstance.findAllByType('button')[2].props.onClick({ target: { value: '' } }, {});
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });

  it('Should render a <p> with text when no data', (done) => {
    component = renderer.create(
      <Router>
        <AdminDashBoard
          requests={[]}
          loadAdminRequests={() => loadRequests}
          storeUserRequests={requests => requests}
          adminAction={() => adminAction}
        />
      </Router>,
    );
    componentInstance = component.root;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });

  it('Should dispatch loadAdminRequests action', (done) => {
    const dispatch = jest.fn();

    expect(mapDispatchToProps(dispatch).loadAdminRequests(1)).toBeUndefined();
    done();
  });

  it('Should dispatch storeUserRequests action', (done) => {
    const dispatch = jest.fn();

    expect(mapDispatchToProps(dispatch).storeUserRequests({ request: 'test' })).toBeUndefined();
    done();
  });

  it('Should dispatch adminAction action', (done) => {
    const dispatch = jest.fn();

    expect(mapDispatchToProps(dispatch).adminAction(1, { name: 'test' })).toBeUndefined();
    done();
  });

  it('Should have userRequests in store', (done) => {
    const store = mapStateToProps({ userRequests: 'users' });
    done();
    expect(store.requests).toBe('users');
  });
});
