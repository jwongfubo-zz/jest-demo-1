import React from "react";
import { render } from "react-testing-library";
import Form from "../Form_1";

describe("Form.js should render correctly with data", () => {
  it("Form should render with relevant elements", () => {
    const { queryByLabelText, queryByText } = render(<Form />);
    const movieTitle = queryByLabelText(/^movie title$/i);
    const genres = queryByLabelText(/^genres$/i);
    const submitButton = queryByText(/^submit button$/i);

    expect(movieTitle).toBeTruthy();
    expect(genres).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
});
