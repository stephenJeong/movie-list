// This is where most of your work will be done
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      search: '',
    }
    this.searchVidRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let app = this;
    let {name, value} = app.searchVidRef.current;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // consider making another component for just the movie list and passing down
    // movies as props to that component
    const { movies, search } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
          <form onSubmit={this.handleSearch}>
            <label>
              Search Movie Title:
              <input type="text" name="search" ref={this.searchVidRef}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        <ul>
        {movies.map((movie, i) => {
          return <li key={i}> {movie.title} </li>
        })}
        </ul>
      </div>
    )
  }
}
