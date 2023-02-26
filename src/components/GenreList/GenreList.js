import {useEffect, useState} from "react";

import {genreService} from "../../services";
import {GenreListCard} from "../GenreListCard/GenreListCard";

const GenreList = () => {

    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        genreService.getGenres().then(({data})=>setGenres(data.genres))
    }, []);


    return (
        <div>
            {genres.map(genre=><GenreListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};