// This is where most of your work will be done
import React, { Component } from 'react'

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
      </div>
    )
  }
}
