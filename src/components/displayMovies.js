import React from "react";
import GetMovie from "./getMovieInfo";
class DisplayMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    const movieInfo = [];
    this.movieID = this.props.movieList.forEach(async (movie) => {
      const url =
        "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" + "&t=" + movie;
      const movieResponse = await fetch(url).catch((error) =>
        console.log(error)
      );
      movieInfo.push(await movieResponse.json());
      this.setState({ movies: movieInfo });
    });
  }
  componentWillUnmount() {
    clearInterval(this.movieID);
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <p>Movie details</p>
        {this.state.movies.map((d) => (
          <GetMovie key={d.imdbID} movieInfo={d} />
        ))}
      </div>
    );
  }
}

export default DisplayMovies;
