import {axiosService} from "./axiosService";

import {urls} from "../configs";

const movieService = {
    getAll:() =>axiosService.get(urls.movies)
}

export {
    movieService
}