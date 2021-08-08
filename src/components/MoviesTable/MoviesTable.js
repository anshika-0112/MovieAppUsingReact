import MovieTile from "./MovieTile.js";
import React from "react";
import "../../componentsStyle/moviesTable.css";

export default class MoviesTable extends React.Component {
  render() {
    const rows = [];
    this.props.movies.forEach((movie) => {
      rows.push(
        <MovieTile
          className="movieTile"
          movieInformation={movie}
          key={movie.imdbID}
        />
      );
    });
    return <div id="moviesTable">{rows}</div>;
  }
}