import React, { Component } from 'react'

export default class Details extends Component {
  constructor (props) {
    super(props)
  }
  render() {

    let {title, vote_average, release_date,
      overview, poster_path } = this.props.movieInfo;
    return (
      <div>
        Movie Details from Details Component
        <br/>
        <strong>Title:</strong> {title}
        <br/>
        <strong>Star Rating: </strong> {vote_average}
        <br/>
        <strong>Overview:</strong> {overview}
        <br/>
        <strong>Released: </strong> {release_date}
        <br/>
      </div>
    )
  }
}
