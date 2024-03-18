import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [params, setParams] = useSearchParams({page: '1'});
    const page = params.get('page');
    const genre  = params.get('genre');
    const query  = params.get('query');

    return {
        query,
        genre,
        page,
        prevPage: () => setParams(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        }),
        nextPage: () => setParams(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }
}

export {
    usePageQuery
}