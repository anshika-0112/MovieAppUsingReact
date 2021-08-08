import React from "react";
import "../../componentsStyle/searchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStorageChange = this.handleInStorageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.onSubmit(e);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStorageChange(e) {
    this.props.onStorageChange(e.target.checked);
  }
  render() {
    const movieInput = this.props.movieInput;
    const inStorage = this.props.inStorage;
    return (
      <form onSubmit={this.handleSubmit} id="movieForm">
        <input
          type="text"
          placeholder="Search..."
          value={movieInput}
          onChange={this.handleFilterTextChange}
          id="searchBar"
        />
        <button type="submit" value="Submit" className="btn-red">
          Submit
        </button>
        <p>
          <input
            type="checkbox"
            checked={inStorage}
            onChange={this.handleInStorageChange}
          />{" "}
          Only show movies in Storage
        </p>
      </form>
    );
  }
}