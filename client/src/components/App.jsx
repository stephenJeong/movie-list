// This is where most of your work will be done
import React, { Component } from 'react'
import MovieList from './MovieList.jsx';

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
      addMovie: '',
      searchMovies: []
    }

    this.searchVidRef = React.createRef();
    this.addVidRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let app = this;
    let {movies}=this.state;

    let {name, value} = app.searchVidRef.current;
    let movieMatches = movies.filter((movie) => {
      if (movie.title.includes(value)) {
        return movie
      }
    });
    if (movieMatches.length < 1) {
      movieMatches.push({title: 'movie title not found, please try again'})
    }
    this.setState({
      [name]: value,
      searchMovies: movieMatches
    });
  }

  handleAddMovie(e) {
    e.preventDefault();
    let app = this;
    let {name, value} = app.addVidRef.current;
    this.setState({
      [name]: value
    });
  }


  render() {
    // consider making another component for just the movie list and passing down
    // movies as props to that component
    // make a func that only returns a string if the state.searchVids has a length otherwise return null

    const { movies, search, searchMovies } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
          <form onSubmit={this.handleSearch}>
            <label>
              Add Movie Title:
              <input type="text" name="addMovie" ref={this.addVidRef}/>
              <button onClick={this.handleAddMovie}>Add Movie!</button>
            </label>
            <br/>
            <label>
              Search Movie Title:
              <input type="text" name="search" ref={this.searchVidRef}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        <div>
          <MovieList movies={movies}/>
        </div>
        <div>
          {(searchMovies.length > 0) ? searchMovies.map((movie, i) => {
            return <div key={i}>{movie.title}</div>
          }) : null}
        </div>
      </div>
    )
  }
}
