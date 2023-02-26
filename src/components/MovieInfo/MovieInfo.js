import {useEffect, useState} from "react";

import {movieService} from "../../services";

const MovieInfo = ({movieId,posterPath, config}) => {
    const [film, setFilm] = useState([]);

    useEffect(()=>{
        movieService.getById(movieId).then(({data})=>setFilm(data));
    },[movieId]);


    return (
        <div>
            {film && (
                <>
                    <h1>{film.title}</h1>
                </>
            )}
        </div>
    );
};

export {MovieInfo};