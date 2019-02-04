import React, { Component } from 'react'
import Movie from './Movie.jsx';

export default class MovieList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let { movies } =  this.props;

    return (
      <ul>
        {movies.map((el, i) => {
          return <Movie key={i} movie={el.title}/>
        })}
      </ul>
    )
  }
}


