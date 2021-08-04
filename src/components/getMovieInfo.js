import React from "react";
import DisplayMovieTile from "./displayMovieTile";

class GetMovieInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: "",
      movieList: [],
      isCheckboxChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList() {
    const movieInfo = [];
    this.movieID = this.props.movieList.forEach(async (movie) => {
      const url =
        "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" + "&t=" + movie;
      const movieResponse = await fetch(url).catch((error) =>
        console.log(error)
      );
      movieInfo.push(await movieResponse.json());
      this.setState({ movieList: movieInfo });
    });
  }

  async getMovieGivenByUser(movieName) {
    let movieInfo = this.state.movieList;
    const url =
      "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" +
      "&t=" +
      movieName;
    const movieResponse = await fetch(url).catch((error) => console.log(error));
    movieInfo.push(await movieResponse.json());
    console.log(movieInfo);
    this.setState({ movieList: movieInfo });
  }

  handleChange(event) {
    this.setState({ movieInput: event.target.value });
  }
  handlingCheckBoxState(movieName) {
    let movieInfo = this.state.movieList;
    const checkboxState = this.state.isCheckboxChecked;
    let movieArray = [];
    if (checkboxState) {
      movieArray = movieInfo.filter((movie) => {
        console.log(movie.Title);
        return movie.Title.toLowerCase() === movieName.toLowerCase();
      });
      if (movieArray.length === 0) {
        this.getMovieGivenByUser(this.state.movieInput);
      }
    } else {
      this.getMovieGivenByUser(this.state.movieInput);
    }
  }
  handleSubmit(event) {
    this.handlingCheckBoxState(this.state.movieInput);
    event.preventDefault();
  }
  handleCheckboxClick() {
    console.log("checked");
    this.setState({ isCheckboxChecked: !this.state.isCheckboxChecked });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="movieForm">
          <h1 className="movieHeading">Search Movie</h1>
          <input type="checkbox" onChange={this.handleCheckboxClick}></input>
          <input
            id="searchBar"
            type="text"
            value={this.state.movieInput}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit" className="btn-red">
            Submit
          </button>
        </form>

        {this.state.movieList.map((d) => (
          <DisplayMovieTile key={d.imdbID} movieInfo={d} />
        ))}
      </div>
    );
  }
}

export default GetMovieInformation;
