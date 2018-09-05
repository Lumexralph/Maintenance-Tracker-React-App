import passwordMatch from '../../actions/passwordMatch';

test('Test for passwordMatch action', () => {
  const actionObject = passwordMatch(true);

  expect(actionObject.type).toBe('PASSWORD_MATCH');
  expect(actionObject.payload).toBe(true);
});
