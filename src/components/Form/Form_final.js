import React, { Component } from 'react';
import { savePost } from '../../common/utils/Utils_final';

export default class Form extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { movieTitle, genres } = event.target.elements;
    savePost({
      movieTitle: movieTitle.value,
      genres: genres.value.split(',').map(elem => elem.trim())
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="movie-title-id">Movie Title</label>
        <input id="movie-title-id" name="movieTitle" type="text" />

        <label htmlFor="genres-id">Genres</label>
        <input id="genres-id" name="genres" type="text" />

        <button type="submit">Submit Button</button>
      </form>
    );
  }
}
