import "./App.css";

import DisplayMovies from "./components/getMovieInfo";
function App() {
  const movieList = ["home", "pie", "avengers"];
  return (
    <div className="App">
      <DisplayMovies movieList={movieList} />
    </div>
  );
}

export default App;
