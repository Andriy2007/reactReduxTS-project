import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMoviesInfo} from "../interfaces";

const moviesService = {

    getAllMovies: (page:string, with_genres: string): IRes<IMoviesInfo> => apiService.get(urls.movies, { params: {page, with_genres}}),
    getMovieById: (id: string): IRes<IMovie> => apiService.get(`${urls.movie}/${id}`),
    searchMovies: (page:string, query: string): IRes<IMoviesInfo> => apiService.get(urls.search, { params: {page, query} }),
};

export {
    moviesService
}


