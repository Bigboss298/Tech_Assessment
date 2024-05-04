import axios from 'axios';
import { create } from 'zustand';

export const useSearchs = create((set, get) => ({
    movie: {
        data: null,
        setMovie: (value) => set((state) => ({ ...state, movie: {...state.movie, data: value } })),
    },
    singleMovie: {
        data: null,
        setSingleMovie: (value) => set((state) => ({ ...state, singleMovie: { ...state.singleMovie, data: value } })),
       },
    query: {
        data: null,
        setQuery: (value) => set((state) => ({ ...state, query: { ...state.query, data: value } })),
    },
    get: {
        loading: false,
        error: null,
        setLoading: (value) => set((state) => ({ ...state, get: { ...state.get, loading: value } })),
        clearError: () => set((state) => ({ ...state, get: { ...state.get, error: null } })),
   },
  
   fetchMovie: async (title) => {
      get().get.setLoading(true);
      try {
        const res = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=776a5d6f`);
        console.log(res.data);
        
        get().movie.setMovie(res.data);

        get().get.setLoading(false);



      } catch (err) {
        set((state) => ({ ...state, get: { ...state.get, error: handleError(err), loading: false, }, }));
      }
   },
   fetchSingleMovie: async (imdbID) => {
    get().get.setLoading(true);
        try {
            const res = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=776a5d6f`);
            console.log(res.data);

            get().singleMovie.setSingleMovie(res.data);

            get().get.setLoading(false);

        } catch (error) {
            set((state) => ({ ...state, get: { ...state.get, error: handleError(err), loading: false, }, }));
        }
   }

}));

const handleError = (error  ) => {
    const errorMessage = error?.data?.message;

    switch (true) {
         case errorMessage:
              return errorMessage;
         default:
              return 'Internal server error';
    }
}