import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genres.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenre
}
const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    const navigate = useNavigate()

    const goMovies = () => {
        navigate(`/genres/movies?page=1&genre=${id}`, )
    }
    return (
        <div className={css.Genre}>
                <div className={css.buttonGenre} onClick={goMovies}>{name}</div>
        </div>
    );
};

export {Genre};