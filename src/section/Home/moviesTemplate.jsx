import { Link } from 'react-router-dom';

export default function SearchResult({ data }) {
    if (!data) return <h1>Enter the title above</h1>;
    
    if(data.Response === "False") return <h1>{data ? data.Error : "No search results found."}</h1>
    

    const { Genre, Title, Year, Type, imdbID } = data;

    return (
        <div className="movieCard">
            <div>
                <Link to={`/singlemovie/${imdbID}`}>
                <h1>{Title}</h1>
                </Link>
            </div>
            <div className='subMovieCard'>
                <li>{Year}</li>
                <li>{Genre}</li>
                <li>{Type}</li>
            </div>

        </div>
    )
}