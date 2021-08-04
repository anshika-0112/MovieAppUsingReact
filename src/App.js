import "./App.css";
import GetMovieInformation from "./components/getMovieInfo";

function App() {
  const movieList = ["home", "life", "avengers", "platform", "wazir"];
  return (
    <div className="App">
      <GetMovieInformation movieList={movieList} />
    </div>
  );
}

export default App;
