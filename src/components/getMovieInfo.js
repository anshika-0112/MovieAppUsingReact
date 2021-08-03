import React from "react";
import GetMovie from "./displayMovies";
class DisplayMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: "",
      movies: [],
    };
    //     this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
  // handleChange(event) {
  //   this.setState({movieInput: event.target.value});
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  render() {
    console.log(this.state.movies);
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form> */}
        <p>Movie details</p>
        {this.state.movies.map((d) => (
          <GetMovie key={d.imdbID} movieInfo={d} />
        ))}
      </div>
    );
  }
}

export default DisplayMovies;
