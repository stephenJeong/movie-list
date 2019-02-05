import React, { Component } from 'react'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.getMovieName = this.getMovieName.bind(this)
  }

  getMovieName(e) {
    var movie = e.target.name
    let app = this;
    return app.props.handleToggle(movie);
  }


  render() {
    let { movie } =  this.props;
    return (
      <li name={movie}>
        {movie}
        <button name={movie} onClick={this.getMovieName}>watched</button>
      </li>
    )
  }
}


