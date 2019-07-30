// This is where most of your work will be done
import React, { Component } from 'react';
import MovieList from './MovieList.jsx';
import movies from '/helpers/sampleData.js';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: null
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieList movies={movies} />
      </div>
    )
  }
}
