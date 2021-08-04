function MovieContent(props) {
  return (
    <div>
      {props.showMovieInfo && (
        <div>
          {props.movieContent.Genre}
          <p>Ratings: {props.movieContent.Ratings[0].Value}</p>
          <p >Overview: {props.movieContent.Plot}</p>
          <p>Cast: {props.movieContent.Actors}</p>
        </div>
      )}
    </div>
  );
}

export default MovieContent;
