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
      ],
      value: '',
      search: false,

    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(e) {
    let app = this;
    this.setState({search: true})
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    const { movies, value, search } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <form onSubmit={this.handleSearch}>
          <label>
            Search Movie Title:
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit"/>
        </form>
        <ul>
          {search === true && movies.map((movie, i) => {
            if (value === '') {
              return <li key={i}> {movie.title}</li>
            } else if (movie.title.includes(value)) {
              return <li key={i}> {movie.title}</li>
            }
          })}
        </ul>
      </div>
    )
  }
}
