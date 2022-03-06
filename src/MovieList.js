import React from 'react';
import MoviesCards from './MovieCards'
import './movieslist.css';
const MovieList = ({movies}) => {


    return (
        <div>

            {movies.map(el => <MoviesCards movie={el} />)}

        </div>
    )

}
export default MovieList;
