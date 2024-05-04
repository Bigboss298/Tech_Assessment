import image from '../../assets/banana3.jpeg';
import { useParams } from 'react-router-dom';

export default function SingleMovieTemplate({ data }) {
    const { Title, Year, imdbID, Rated, Released, Plot, totalSeasons, imdbVotes, imdbRating, Awards, Actors, Poster } = data;
    return (
            <div className='singleMovieBox'>
                <div className="singlecontainer">
                    <div className='singleImage'>
                        <img src={Poster} alt="poster" />
                    </div>
                    <div className='singleText'>
                        <p>Title :{Title} </p>
                        <p>Year : {Year} </p>
                        <p>Rated : {Rated} </p>
                        <p>Released : {Released} </p>
                        <p> Description: {Plot} </p>
                        <p>totalSeasons : {totalSeasons}</p>
                        <p>Meta Score: {} </p>
                        <p>imdb Rating : {imdbRating} </p>
                        <p>imbd Votes : {imdbVotes} </p>
                        <p>imdbID : {imdbID} </p>
                        <p>Awards : {Awards} </p>
                        <p>Actors : {Actors} </p>

                    </div>
                </div>
            </div>        
        )
}


