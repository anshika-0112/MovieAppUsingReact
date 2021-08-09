import React from "react";
import MovieDescription from "./MovieDescription.js";
import "../../componentsStyle/movieTile.css";

export default class MovieTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null,
    };
    this.handleShowInfoClick = this.handleShowInfoClick.bind(this);
    this.handleHideInfoClick = this.handleHideInfoClick.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }
  handleShowInfoClick() {
    this.fetchMovieDetails(this.props.movieInformation.Title);
  }
  handleHideInfoClick() {
    this.setState({ movieDetails: null });
  }

  async fetchMovieDetails(movieName) {
    const url =
      "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" +
      "&t=" +
      movieName;
    const movieResponse = await fetch(url).catch((error) => console.log(error));
    const movieDetails = await movieResponse.json();
    this.setState({ movieDetails });
  }
  render() {
    let movieInfoButton;
    if (this.state.movieDetails) {
      movieInfoButton = (
        <button className="btn-red" onClick={this.handleHideInfoClick}>
          Hide Info
        </button>
      );
    } else
      movieInfoButton = (
        <button className="btn-red" onClick={this.handleShowInfoClick}>
          Show Info
        </button>
      );
    return (
      <div className="movieTile">
        <img
          src={this.props.movieInformation.Poster}
          className="moviePoster"
        ></img>
        <div className="movieContent">
          <h1 className="movieHeading">{this.props.movieInformation.Title}</h1>
          <MovieDescription movieDetails={this.state.movieDetails} />
          {movieInfoButton}
        </div>
      </div>
    );
  }
}
