import React from 'react';

import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('calls the oPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = render(
      <Button title="button title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText(/button title/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
  it('should shows loading indicator', () => {
    render(<Button title="button title" />);
  });
});
