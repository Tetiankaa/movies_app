const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies:'/discover/movie',
    movie:'/movie',
    genres:'/genre/movie/list',
    genre:'/discover/movie?with_genres=',
    image:'/configuration'
}

export {
    baseURL,
    urls
}