import { useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hook";

import css from './Movie.module.css';
import { useParams} from "react-router-dom";
import {movieActions} from "../../../store";
import {Genre} from "../../GenresContainer";

const Movie = () => {
    const {movie,checked} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(movieActions.getMovieById(id))
    }, [])

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${checked ? dark : light}`}>
            <div className={css.main}>
                <img className={css.img} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie && movie.poster_path}`}/>
                <div className={css.description}>
                    <div><h1>{movie && movie.title}</h1>
                        <div><span>Release Date: {movie && movie.release_date}</span>
                            {movie && movie.genres && <h4 className={css.genresMap}>{movie && movie.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}</h4>}
                        </div>
                    </div>
                    <div><h3>{movie && movie.tagline}</h3></div>
                </div>
                <div className={css.view}>
                    <h3>Overview</h3>
                    <h4>{movie && movie.overview}</h4>
                </div>
            </div>
        </div>
    );
};

export {
    Movie
}
