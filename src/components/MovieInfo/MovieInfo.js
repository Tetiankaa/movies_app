
import {useEffect, useState} from "react";
import {movieService} from "../../services";


const MovieInfo = ({movieId}) => {
    const [film, setFilm] = useState([]);



    useEffect(()=>{
        movieService.getById(movieId).then(({data})=>setFilm(data))
    },[movieId])


    return (
        <div>
            {film && (
                <>
                    <div> {film.id}</div>
                    <div>{film.title}</div>
                </>
            )}
        </div>
    );
};

export {MovieInfo};