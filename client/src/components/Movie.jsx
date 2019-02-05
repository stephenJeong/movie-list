import React, { Component } from 'react'
import Collapsible from 'react-collapsible';

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
      <div>
          <br></br>
          <div name={movie}>
            {movie}
            <button name={movie} onClick={this.getMovieName}>watched</button>
          </div>
          <li>
          <Collapsible className='container' trigger={movie}>
            <p className='card'>
              Collapsible content
              <br/>
              <input type="radio" name="watched" value="watched"/>watched
              <br/>
              <button name={movie} onClick={this.getMovieName}>watched</button>
            </p>
          </Collapsible>
          </li>
          {/* {this.state.clicked && <newComponent />} */}
      </div>


      // <li name={movie}>

      // </li>
    )
  }
}


