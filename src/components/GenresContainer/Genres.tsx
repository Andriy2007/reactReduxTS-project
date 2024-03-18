import {useAppDispatch, useAppSelector} from "../../hook";
import {useEffect} from "react";

import {genreActions} from "../../store";
import css from './Genres.module.css'
import {Genre} from "./Genre";

const Genres = () => {
        const {genres} = useAppSelector(state => state.genres);
        const {checked} = useAppSelector(state => state.movies)
        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(genreActions.getAllGenres())
        }, [])

    if (!Array.isArray(genres)) {
        return <div>Loading...</div>;
    }

    const light = css.light;
    const dark = css.dark;

        return (
            <div className={`${checked ? dark : light}`}>
            <div className={css.Genres}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            </div>
        );
    };
export {
    Genres
}