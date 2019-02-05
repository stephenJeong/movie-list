// This is where most of your work will be done
import React, { Component } from 'react'
import MovieList from './MovieList.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      search: '',
      addMovie: '',
      searchMovies: [],
      watchedMovies: [],
      toggleWatched: false,
      showWatched: false
    }

    this.userMovies = [];
    this.searchVidRef = React.createRef();
    this.addVidRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleLists = this.toggleLists.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let app = this;
    let {movies}=this.state;

    let {name, value} = app.searchVidRef.current;
    // handles empty search
    if (value === '') {
      return;
    }

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
    console.log('add vid Ref', this.addVidRef);
    let { name, value } = this.addVidRef.current;
    if (value === '') {
      return;
    }
    app.userMovies.push({title: value, watched: false });
    this.setState({
      [name]: '',
      movies: app.userMovies
    });
  }

  handleInputChange() {
    let {name, value} = this.addVidRef.current;
    this.setState({
      [name]: value
    });
  }

  handleToggle(movie) {
    let app = this;
    for (var i = 0; i < app.state.movies.length; i++) {
      var element = app.state.movies[i];
      if (element.title === movie) {
        var movieIdx = i;
        var foundMovie = element;
        break;
      }
    }
    // directly modifies userMovies array then reassigns movies to this array.
    app.userMovies.splice(movieIdx, 1);
    var newWatchedMovies = app.state.watchedMovies.slice()
    newWatchedMovies.push(foundMovie);

    this.setState({
      movies: app.userMovies,
      watchedMovies: newWatchedMovies
    });
  }

  toggleLists() {
    let watched = !this.state.showWatched;
    let toggled = !this.state.toggleWatched;
    this.setState({
      showWatched: watched,
      toggleWatched: toggled
    });
  }

  render() {
    const { movies, search, searchMovies, toggleWatched, watchedMovies, addMovie, showWatched } = this.state;

    return (
      <div>
        <h1>Movie List</h1>
          <form onSubmit={this.handleSearch}>
            <label>
              Add Movie Title:
              <input type="text" placeholder="add movies here" value={addMovie} name="addMovie" ref={this.addVidRef} onChange={this.handleInputChange.bind(this)}/>
              <button style={{background: "green", color: "white"}} onClick={this.handleAddMovie}> Add Movie! </button>
            </label>
            <br/>
            <br/>
            <label>
              Search Movie Title:
              <input type="text" placeholder="search..." name="search" ref={this.searchVidRef}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
          <button style={(showWatched === true) ? {background: "green", color: "white"} : null}
            onClick={this.toggleLists}>Watched</button>
          <button style={(showWatched === false) ? {background: "green", color: "white"} : null}
            onClick={this.toggleLists}>To Watch</button>
        <div>
          <MovieList handleToggle={this.handleToggle} movies={(toggleWatched === false) ? movies : watchedMovies}/>
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

