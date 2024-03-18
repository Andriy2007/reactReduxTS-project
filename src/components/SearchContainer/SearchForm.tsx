import {useNavigate} from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';

import css from './Search.module.css'

interface FormData {
    searchText: string;
}
const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm<FormData>();
    const navigate = useNavigate()
    const submit: SubmitHandler<FormData> = async (data) => {
        const searchText = data.searchText.trim();
        await navigate(`/search?page=1&query=${searchText}`);
        reset();
    };
    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" placeholder="Type to search..." {...register('searchText')} />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};
export {
    SearchForm
}