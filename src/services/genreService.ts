import {urls} from "../constants";
import {IGenre} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";

const genreService = {
    getAllGenres: (): IRes<IGenre> => apiService.get(urls.genres),
}

export {
    genreService
}