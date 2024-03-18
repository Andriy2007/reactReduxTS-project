import {IGenre} from "./genreInterface";

export interface IMovie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    genres: IGenre[];
    vote_average: number;
    tagline: string;
    overview: string;

    adult: boolean;
    backdrop_path: string;
    budget: number;
    homepage: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    popularity: number;
    revenue: number;
    runtime: number;
    status: string;
    video: boolean;
    vote_count: number;
}