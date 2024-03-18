import {useAppDispatch, useAppSelector, usePageQuery} from "../../hook";
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {movieActions} from "../../store";
import css from "../MoviesContainer/Movies/Movies.module.css";
import {MoviesForm} from "../MoviesContainer/Movies/MoviesForm";

const Search = () => {
    const {movies, checked} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {page, query, prevPage, nextPage} = usePageQuery();

    const Scroll: React.FC = () => {
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    const light = css.light;
    const dark = css.dark;

    useEffect(() => {
        dispatch(movieActions.searchMovies({query,page}))
    }, [query,page])


    if (!Array.isArray(movies)) {
        return <div>Loading...</div>;
    }

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
    Search
}