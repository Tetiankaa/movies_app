import {axiosService} from "./axiosService";

import {urls} from "../configs";

const genreService = {
    getGenres:() => axiosService.get(urls.genres),
    getById:(id)=> axiosService.get(`${urls.genre}${id}`)
}

export {
    genreService
}