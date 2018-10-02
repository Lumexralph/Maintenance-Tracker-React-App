import loadingStatus from '../../actions/loadingStatus';

test('Test for loadingStatus action', () => {
  const actionObject = loadingStatus(true);

  expect(actionObject.type).toBe('SIGNUP_PROGRESS');
  expect(actionObject.payload).toBe(true);
});
