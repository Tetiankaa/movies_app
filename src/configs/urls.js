const baseURL = 'https://api.themoviedb.org/3';

const baseUrl = 'https://api.themoviedb.org/3/movie'

const infoMovie = {
    baseUrl:{
        baseUrl,
        byId:(movie_id) =>`${baseUrl}/${movie_id}`
    }
}

const urls = {
    movies:'/discover/movie',//done
    movie:'/movie', //done
    genres:'/genre/movie/list',
    image:'/configuration' //done
}

export {
    baseURL,
    urls,
    infoMovie
}