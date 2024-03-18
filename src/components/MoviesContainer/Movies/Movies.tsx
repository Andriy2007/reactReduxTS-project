import React, {useEffect} from "react";
import {useLocation } from 'react-router-dom';

import css from './Movies.module.css';
import {useAppDispatch, useAppSelector, usePageQuery} from "../../../hook";
import {movieActions} from "../../../store";
import {MoviesForm} from "./MoviesForm";

const Movies = () => {
    const {movies,checked} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {page, genre, prevPage, nextPage} = usePageQuery();
    const Scroll: React.FC = () => {
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    useEffect(() => {
        dispatch(movieActions.getAllMovies({genre,page}))
    }, [genre,page])

    if (!Array.isArray(movies)) {
        return <div>Loading...</div>;
    }

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${checked ? dark : light}`}>
        <div className={css.MoviesContainer}>
            <div className={css.Movies}>
                <Scroll/>
                    {movies.map(movie => <MoviesForm key={movie.id} movie={movie}/>)}</div>
                <div className={css.pag}>
                    <button  onClick={() => prevPage()}> {`<<`} </button>
                    <h5 className={css.Page}> Page: {page}</h5>
                    <button  onClick={() => nextPage()}> {`>>`}</button>
                </div>
            </div>
        </div>

    );
};

export {
    Movies
}