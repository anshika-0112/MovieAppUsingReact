import "../componentStyle/movieTile.css";
import React from "react";
import MovieContent from "./handlingMovieContent/movieContent";
import { ShowInfo, HideInfo } from "./movieButton.js";
class GetMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInformation: this.props.movieInfo,
      show: false,
    };
    this.handleShowInfoClick = this.handleShowInfoClick.bind(this);
    this.handleHideInfoClick = this.handleHideInfoClick.bind(this);
  }
  handleShowInfoClick() {
    this.setState({ show: true });
  }
  handleHideInfoClick() {
    this.setState({ show: false });
  }
  componentDidMount() {
    console.log("mounting");
  }
  createCustomMovieInfo() {
    const movieInformation = { ...this.state.movieInformation };
    let movieObject;
    console.log("entered here");
    if (this.state.show) {
      movieObject = {
        plot: movieInformation.Plot,
        cast: movieInformation.Actors,
        genre: movieInformation.Genre,
      };
    } else {
      movieObject = {};
    }
    console.log(movieObject);
    return movieObject;
  }
  componentDidUpdate() {
    if (this.props.movieInfo == this.state.movieInformation) {
      this.setState({ movieInformation: this.createCustomMovieInfo() });
      console.log(this.state.movieInformation);
    }
  }

  componentWillUnmount() {
    clearInterval(console.log("unmounting"));
  }
  render() {
    let button;
    if (this.state.show) {
      button = <HideInfo onClick={this.handleHideInfoClick} />;
    } else button = <ShowInfo onClick={this.handleShowInfoClick} />;
    return (
      <div className="movieTile">
        <img src={this.props.movieInfo.Poster} className="movieImage"></img>
        <div className="movieContent">
          <h2>{this.props.movieInfo.Title}</h2>
          <MovieContent
            show={this.state.show}
            movieContent={this.props.movieInfo}
          />
          {button}
        </div>
      </div>
    );
  }
}

export default GetMovie;
