import "../../componentsStyle/movieDescription.css";

export default function MovieDescription(props) {
  return (
    <div>
      {props.showMovieDetails && props.movieContent !== null && (
        <div className="movieDescription">
          {props.movieContent.Genre} ({props.movieContent.Type})
          <p>
            <span>Ratings:</span> {props.movieContent.Ratings[0].Value}
          </p>
          <p>
            <span>Overview:</span> {props.movieContent.Plot}
          </p>
          <p>
            <span>Language:</span> {props.movieContent.Language}
          </p>
          <p>
            <span>Released:</span> {props.movieContent.Released}
          </p>
          <p>
            <span>Cast:</span> {props.movieContent.Actors}
          </p>
        </div>
      )}
    </div>
  );
}
