import signupError from '../../actions/signupError';

test('Test for signupError action', () => {
  const actionObject = signupError('Error');

  expect(actionObject.type).toBe('SIGNUP_ERROR');
  expect(actionObject.payload).toBe('Error');
});
