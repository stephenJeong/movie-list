import React, { Component } from 'react'

export default class Details extends Component {
  constructor (props) {
    super(props)
    this.movieDetails = {
      year: 1995,
      Runtime: '107 min',
      Metascore: '46',
      imdbRating: '6.2',
    }
  }
  render() {
    let {year, Runtime} = this.movieDetails;
    return (
      <div>
        Movie Details from Details Component
        <br/>
        Year: {year}
        <br/>
        Runtime: {Runtime}
      </div>
    )
  }
}
