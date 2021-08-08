import React from "react";
import SearchBar from "./movieHeader/SearchBar";
import MoviesTable from "./MoviesTable/MoviesTable.js";

export default class FilterableMovieTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      movieInput: "",
      inStorage: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStorageChange = this.handleInStorageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const moviesData = JSON.parse(localStorage.getItem("movies"));
    if (moviesData) {
      this.setState({
        movieList: moviesData,
      });
    } else {
      this.fetchMovies("life");
    }
  }
  async fetchMovies(searchString) {
    if (!searchString) {
      return;
    }
    const url =
      "https://www.omdbapi.com/?i=tt3896198&apikey=8af58d6d" +
      "&s=" +
      searchString;
    const movieResponse = await fetch(url).catch((error) => console.log(error));
    const movieInfo = await movieResponse.json();
    if (movieInfo.Response !== "False") {
      this.setState({ movieList: movieInfo.Search });
      localStorage.setItem("movies", JSON.stringify(movieInfo.Search));
    }
  }

  handleSubmit(event) {
    if (this.state.inStorage) {
      let movieInfo = JSON.parse(localStorage.getItem("movies"));
      if (
        movieInfo[0].Title.toLowerCase().includes(
          this.state.movieInput.toLowerCase()
        )
      ) {
        this.setState({ movieList: movieInfo });
      } else {
        this.fetchMovies(this.state.movieInput);
      }
    } else {
      this.fetchMovies(this.state.movieInput);
    }
    event.preventDefault();
  }
  handleFilterTextChange(movieInput) {
    this.setState({
      movieInput: movieInput,
    });
  }

  handleInStorageChange(inStorage) {
    this.setState({
      inStorage: inStorage,
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          movieInput={this.state.movieInput}
          inStorage={this.state.inStorage}
          onFilterTextChange={this.handleFilterTextChange}
          onStorageChange={this.handleInStorageChange}
          onSubmit={this.handleSubmit}
        />
        <MoviesTable movies={this.state.movieList} />
      </div>
    );
  }
}