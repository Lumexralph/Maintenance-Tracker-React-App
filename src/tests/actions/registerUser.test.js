import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import registerUser from '../../actions/registerUser';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Async action for register user', () => {
  const request = {
    url: 'https://maintenance-tracker-lumexralph.herokuapp.com/api/v1/auth/signup',
  };
  it('returns user data on successful registration ', (done) => {
    const responseData = {
      userId: 1,
      username: 'test',
      adminRole: false,
      token: '488593hghghg',
    };
    mock.onPost(request.url).reply(201, responseData);

    const expectedActions = [{ type: 'SIGNUP_ERROR', payload: false },
      { type: 'SIGNUP_PROGRESS', payload: true },
      {
        type: 'SIGNUP_USER',
        payload:
           {
             userId: 1,
             username: 'test',
             adminRole: false,
             token: '488593hghghg',
           },
      },
      { type: 'MESSAGE', payload: 'Signup successful' },
      { type: 'SIGNUP_PROGRESS', payload: false },
      { type: 'PASSWORD_MATCH', payload: null },
      { type: 'SIGNUP_ERROR', payload: null },
      { type: 'MESSAGE', payload: '' }];

    const store = mockStore({ user: {} });

    return store.dispatch(registerUser(request)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()[2].type).toBe('SIGNUP_USER');
      expect(store.getActions()[2].payload.userId).toBe(1);
      expect(store.getActions()[2].payload.username).toBe('test');
      done();
    });
  });

  it('dispatches MESSAGE type action and server error message on unsuccessful registration ', (done) => {
    request.data = {};

    const responseData = {
      message: 'The user data missing important details',
    };

    mock.onPost(request.url).reply(404, responseData);

    const expectedActions = [{ type: 'SIGNUP_ERROR', payload: false },
      { type: 'SIGNUP_PROGRESS', payload: true },
      { type: 'SIGNUP_ERROR', payload: true },
      { type: 'SIGNUP_PROGRESS', payload: false },
      {
        type: 'MESSAGE',
        payload: 'The user data missing important details',
      },
      { type: 'PASSWORD_MATCH', payload: null },
      { type: 'SIGNUP_PROGRESS', payload: false }];

    const store = mockStore({ user: {} });

    return store.dispatch(registerUser(request)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()[4].type).toBe('MESSAGE');
      expect(store.getActions()[4].payload).toBe('The user data missing important details');
      done();
    });
  });
});
