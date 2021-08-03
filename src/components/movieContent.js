import {ShowMovieContent,HideMovieContent} from '../components/displayMovieContent.js'
function MovieContent(props) {
    if(props.show)
    {
        return <ShowMovieContent movieContent={props.movieContent}/>
    }
    else{
        return <HideMovieContent movieContent={props.movieContent}/>
    }
}

export default MovieContent;