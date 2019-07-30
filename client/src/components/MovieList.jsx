import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => (
  <table>
    <tbody>
      props.movies.map((item) => {
        <Movie movie={item} />
      })
    </tbody>
  </table>
)

export default MovieList;