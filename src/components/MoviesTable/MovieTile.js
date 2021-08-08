import React from "react";
import { HideInfo, ShowInfo } from "./movieInformationButtons";
import MovieDescription from "./MovieDescription.js";
import "../../componentsStyle/movieTile.css";

export default class MovieTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null,
      showMovieDetails: false,
    };
    this.handleShowInfoClick = this.handleShowInfoClick.bind(this);
    this.handleHideInfoClick = this.handleHideInfoClick.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }
  handleShowInfoClick() {
    this.setState({ showMovieDetails: true });
    this.fetchMovieDetails(this.props.movieInformation.Title);
  }
  handleHideInfoClick() {
    this.setState({ showMovieDetails: false });
  }

  async fetchMovieDetails(movieName) {
    const url =
      "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" +
      "&t=" +
      movieName;
    const movieResponse = await fetch(url).catch((error) => console.log(error));
    const movieInfo = await movieResponse.json();
    this.setState({ movieDetails: movieInfo });
  }
  render() {
    let movieInfoButton;
    if (this.state.showMovieDetails) {
      movieInfoButton = <HideInfo onClick={this.handleHideInfoClick} />;
    } else movieInfoButton = <ShowInfo onClick={this.handleShowInfoClick} />;
    return (
      <div className="movieTile">
        <img
          src={this.props.movieInformation.Poster}
          className="moviePoster"
        ></img>
        <div className="movieContent">
          <h1 className="movieHeading">{this.props.movieInformation.Title}</h1>
          <MovieDescription
            showMovieDetails={this.state.showMovieDetails}
            movieContent={this.state.movieDetails}
          />
          {movieInfoButton}
        </div>
      </div>
    );
  }
}