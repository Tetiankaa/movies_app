import {axiosService} from "./axiosService";

import {urls} from "../configs";

const movieService = {
    getMovies:() =>axiosService.get(urls.movies),
    getById:(movie_id)=>axiosService.get(`${urls.movie}/${movie_id}`)
}

export {
    movieService
}