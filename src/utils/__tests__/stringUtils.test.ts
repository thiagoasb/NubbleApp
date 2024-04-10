import {stringUtils} from '@utils';

test('capitalizeFirstLetter', () => {
  const name = stringUtils.capitalizeFirstLetter('Ana maria');

  expect(name).toBe('Ana Maria');
});
