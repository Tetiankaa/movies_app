import {useEffect, useState} from "react";

import {imageService, movieService} from "../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './Container.module.css';

const MoviesList = () => {

    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState(null);



    useEffect(() => {
        imageService.getAll().then(({data})=> setConfig(data.images));
        movieService.getMovies().then(({data})=> setMovies(data.results));
    }, []);




    return (
        <div className={css.Container}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} config={config} />)}
        </div>
    );
};

export {MoviesList};
