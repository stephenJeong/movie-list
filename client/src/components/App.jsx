// This is where most of your work will be done
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <ul>
          {movies.map((movie) => {
            return <li> {movie.title}</li>
          })}
        </ul>
      </div>
    )
  }
}
