import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import css from './Movies.module.css'
import {IMovies} from "../../../interfaces";
import {Badge} from "../../Badge";
import {Stars} from "../../Stars";

interface IProps extends PropsWithChildren {
    movie: IMovies
}
const MoviesForm: FC<IProps> = ({movie}) => {
    const {title, original_language, poster_path, vote_average, id} = movie;
    const navigate = useNavigate()
    const goMovieDetails = () => {
        navigate(`/movies/${id}`)
    }

    return (
        <div className={css.Movie} onClick={goMovieDetails}>
            <div className={css.nameMovie}>{title}</div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={poster_path}/>
                <Badge badge={{value:original_language, color:"white"}}/>
                <div className={css.Star}> <Stars star={{ rating: vote_average, maxRating: 10}} /></div>
            </div>
    );
};

export {MoviesForm};