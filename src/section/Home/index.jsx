import SearchBox from './search';
import '../../App.css';
import SearchResult from './moviesTemplate';
// import Results from '../../lib/result';
import { useSearchs } from '../../Zustand/searchSlice';

export default function HomePage() {
    const { get, movie } = useSearchs();
    
    const { loading } = get;

    const { data } = movie;

    console.log(data)

    return (
        <>
            <SearchBox />
            <div className='resultContainer'>
            {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    Array.isArray(data) ? (
                        data.map((result) => (
                            <SearchResult data={result} />
                        ))
                    ) : (
                        <SearchResult data={data} />
                    )
                )}
            </div>
        </>
    );
}
// id={data.imdbID} key={data.imdbID}