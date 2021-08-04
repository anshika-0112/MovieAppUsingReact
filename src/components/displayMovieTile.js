import "../componentStyle/movieTile.css";
import React from "react";
import MovieContent from "./handlingMovieContent/movieContent";
import { ShowInfo, HideInfo } from "./movieInformationButtons.js";

class DisplayMovieTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMovieInfo: false,
    };
    this.handleShowInfoClick = this.handleShowInfoClick.bind(this);
    this.handleHideInfoClick = this.handleHideInfoClick.bind(this);
  }
  handleShowInfoClick() {
    this.setState({ showMovieInfo: true });
  }
  handleHideInfoClick() {
    this.setState({ showMovieInfo: false });
  }
  render() {
    let movieInfoButton;
    if (this.state.showMovieInfo) {
      movieInfoButton = <HideInfo onClick={this.handleHideInfoClick} />;
    } else movieInfoButton = <ShowInfo onClick={this.handleShowInfoClick} />;
    return (
      <div className="movieTile">
        <img src={this.props.movieInfo.Poster} className="movieImage"></img>
        <div className="movieContent">
          <h2>{this.props.movieInfo.Title}</h2>
          <MovieContent
            showMovieInfo={this.state.showMovieInfo}
            movieContent={this.props.movieInfo}
          />
          {movieInfoButton}
        </div>
      </div>
    );
  }
}

export default DisplayMovieTile;
