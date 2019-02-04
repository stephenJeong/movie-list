import React, { Component } from 'react'

export default class Movie extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let { movie } =  this.props;
    return (
      <li>
        {movie}
      </li>
    )
  }
}


