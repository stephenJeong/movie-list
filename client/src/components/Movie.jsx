import React, { Component } from 'react';
import Details from './Details.jsx';

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.getMovieName = this.getMovieName.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  getMovieName(e) {
    var movie = e.target.name
    let app = this;
    return app.props.handleToggle(movie);
  }

  handleTitleClick() {

    this.setState({clicked: !this.state.clicked })
  }

  render() {
    let { movie } =  this.props;
    return (
      <div>
          <br></br>
          <div name={movie} onClick={this.handleTitleClick}>
            {movie}
            <button name={movie} onClick={this.getMovieName}>watched</button>
          </div>
          {this.state.clicked && <Details/>}
      </div>


      // <li name={movie}>

      // </li>
    )
  }
}


