import {IMovies} from "./movieInterface";
export interface IMoviesInfo {
    page: number,
    results: IMovies[],
    "total_pages": number,
    "total_results": number

}