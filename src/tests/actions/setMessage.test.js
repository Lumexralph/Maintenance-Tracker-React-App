import setMessage from '../../actions/setMessage';

test('Test for setMessage action', () => {
  const actionObject = setMessage({
    username: 'Lumex',
    email: 'olumideraph@gmail.com',
  });

  expect(actionObject.type).toBe('MESSAGE');
  expect(actionObject.payload.username).toBe('Lumex');
  expect(actionObject.payload.email).toBe('olumideraph@gmail.com');
});
