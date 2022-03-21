import React from 'react';
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieListIndex: '',
    };
  }
  handleClick = (movie, idx) => {
    this.setState((prevState) => {
      return ({
        movieListIndex: idx,
      })
    }
    );
  };

  handleToogle = () => {
    this.setState({
      movieListIndex: ""
    })
  }


  render() {
    return (
      <>
        <h1 className="heading">Movie App</h1>
        <div className="container main-div flex">
          {data.map((movie, idx) => {
            return (
              <div key={idx} className="m-card">
                <img className="img" src={movie.Images[0]} alt={movie.Title} />
                <h1 className="title">Title:{movie.Title}</h1>
                <span className="date">Released Date:{movie.Released}</span>
                <div className="flex">
                  <button
                    onClick={() => this.handleClick(movie, idx)}
                    className="btn"
                  >
                    More Info
                  </button>
                </div>
                <div>
                  {this.state.movieListIndex === idx ? (
                    <Modal key={idx} {...movie} />
                  ) : (
                    ''
                  )}
                  {this.state.movieListIndex === idx ? (
                    <button className='btn-2' onClick={this.handleToogle}>X</button>
                  ) : (
                    ' '
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

function Modal(props) {
  return (
    <>
      {console.log(props)}
      <div className="modal">
        <div className="flex">
          <li>{props.Year}</li>
        </div>
        <li>RunTime - {props.Runtime}</li>
        <li>Genre- {props.Genre}</li>
        <li>
          Writer- {props.Writer}
          Director- {props.Director}
        </li>
        <li>Actors- {props.Actors}</li>
        <li>Award - {props.Awards}</li>
        <li>Rating- {props.imdbRating}</li>
        <li>Type-{props.Type}</li>
        <li>Response- {props.Response}</li>
        <div className="flex-2 wrap ">
          {props.Images.map((image) => (
            <div className="flex-35">
              <img
                className="image-width-modal "
                src={`${image}`}
                alt={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
