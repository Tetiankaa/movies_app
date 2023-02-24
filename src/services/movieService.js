import {axiosService} from "./axiosService";

import {infoMovie, urls} from "../configs";

const movieService = {
    getAll:() =>axiosService.get(urls.movies),
    getById:(movie_id)=> axiosService.get(infoMovie.baseUrl.byId(movie_id))
    // getById:(movie_id)=>axiosService.get(`${urls.movie}/${movie_id}`)
}

export {
    movieService
}