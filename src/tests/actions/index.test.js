import signupUser from '../../actions/index';

test('Test for signupUser action', () => {
  const actionObject = signupUser({
    username: 'Lumex',
    email: 'olumideraph@gmail.com',
  });

  expect(actionObject.type).toBe('SIGNUP_USER');
  expect(actionObject.payload.username).toBe('Lumex');
  expect(actionObject.payload.email).toBe('olumideraph@gmail.com');
});
