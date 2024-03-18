import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Header.module.css';
import {useAppSelector} from "../../hook";
import {movieActions} from "../../store";
import {SearchForm} from "../SearchContainer";

const Header = () => {
    const {checked} = useAppSelector(state => state.movies)
    const dispatch = useDispatch()

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${checked ? dark : light}`}>
        <div className={css.Header}>
            <h2 className={css.Logo}><NavLink to={'/'}>MovieDB</NavLink></h2>
            <div className={css.genres}><NavLink to={'/genres'}>Genres</NavLink></div>
            <NavLink to={`/`}>Account</NavLink>
            <SearchForm/>
            <div className={css.checkbox}>
                <b>THEME:</b>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                        dispatch(movieActions.changeToggle(!checked));
                    }}
                />
            </div>
        </div>
        </div>
    );
};

export {
    Header
}