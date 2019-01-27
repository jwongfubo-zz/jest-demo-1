import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="movie-title-id">Movie Title</label>
        <input id="movie-title-id" name="movieTitle" type="text" />

        <label htmlFor="genres-id">Genres</label>
        <input id="genres-id" name="genres" type="text" />

        <button type="submit">Submit Button</button>
      </form>
    );
  }
}
