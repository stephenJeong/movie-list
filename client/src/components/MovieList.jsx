import React, { Component } from 'react'
import Movie from './Movie.jsx';

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      movies: this.props.movies
    }
  }


  render() {
    let { movies } =  this.props;

    return (
      <div>
        {movies.map((el, i) => {
          return <Movie handleToggle = {this.props.handleToggle} key={i} movie={el.title}/>
        })}
      </div>

    )
  }
}


