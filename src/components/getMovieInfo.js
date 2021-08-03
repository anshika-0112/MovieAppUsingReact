import "../componentStyle/movieTile.css";
import React from "react";
import MovieContent from "./movieContent";
import {ShowInfo,HideInfo} from "../components/movieButton.js"
class GetMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
        };
        this.showInformation = this.showInformation.bind(this);
        this.hideInformation = this.hideInformation.bind(this);
      }
        showInformation()
  {
    this.setState({show:true});
  }
  hideInformation()
  {
    this.setState({show:false});
  }

  
    render()
    {
        let button;
    if(this.state.show)
    {
      button=<HideInfo onClick={this.hideInformation}/>
    }
    else
    button=<ShowInfo onClick={this.showInformation}/>
  return (
    <div className="movieTile">
      <img src={this.props.movieInfo.Poster}  className="movieImage"></img>
      <div className="movieContent">
          <h2>{this.props.movieInfo.Title}</h2>
        <MovieContent show={this.state.show} movieContent={this.props.movieInfo}/>
        {button}
      </div>
    </div>
  );}
}

export default GetMovie;
