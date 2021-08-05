import "./App.css";
import GetMovieInformation from "./components/getMovieInfo";
import Header from "./components/Header";

function App() {
  const movieList = ["home", "life", "avengers", "platform", "wazir"];
  return (
    <div className="App">
      <Header/>
      <GetMovieInformation movieList={movieList} />
    </div>
  );
}

export default App;
