export interface IMovies {
    id: number;
    title: string;
    genre_ids: number[];
    poster_path: string;
    vote_average: number;
    original_language: string;
    original_title: string;

    adult: boolean;
    backdrop_path: string;
    overview: string;
    media_type: string;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_count: number;
}