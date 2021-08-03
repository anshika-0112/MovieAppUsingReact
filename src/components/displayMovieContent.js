export function ShowMovieContent(props) {
    return (<div>{props.movieContent.Genre}
    <p>Ratings: {props.movieContent.Ratings[0].Value}</p>
    <p className="moviePlot">Overview:  {props.movieContent.Plot}</p>
    <p>Cast: {props.movieContent.Actors}</p>
    
    </div>);
}

export function HideMovieContent(props) {
    return <div></div>
}
