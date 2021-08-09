import "../../componentsStyle/movieDescription.css";

export default function MovieDescription({movieDetails}) {
  return (
    <div>
      { movieDetails !== null && (
        <div className="movieDescription">
          {movieDetails.Genre} ({movieDetails.Type})
          <p>
            <span>Ratings:</span> {movieDetails.Ratings[0].Value}
          </p>
          <p>
            <span>Overview:</span> {movieDetails.Plot}
          </p>
          <p>
            <span>Language:</span> {movieDetails.Language}
          </p>
          <p>
            <span>Released:</span> {movieDetails.Released}
          </p>
          <p>
            <span>Cast:</span> {movieDetails.Actors}
          </p>
        </div>
      )}
    </div>
  );
}