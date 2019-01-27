import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Form from '../Form_final';
import { savePost as mockedSave } from '../../../common/utils';

jest.mock('../../../common/utils', () => {
  return {
    savePost: jest.fn(() => Promise.resolve())
  };
});

describe('Form.js should render correctly with data', () => {
  it('Form should render with relevant elements after clicking submit button', () => {
    const { queryByLabelText, queryByText } = render(<Form />);

    const movieTitle = queryByLabelText(/^movie title$/i);
    const genres = queryByLabelText(/^genres$/i);
    const submitButton = queryByText(/^submit button$/i);
    movieTitle.value = 'harry potter';
    genres.value = 'fantasy,action,family';

    fireEvent.click(submitButton);
    expect(mockedSave).toHaveBeenCalledTimes(1);
    expect(mockedSave).toHaveBeenCalledWith({
      movieTitle: 'harry potter',
      genres: ['fantasy', 'action', 'family']
    });
  });
});
