import axios from "axios";

import {baseURL} from "../constants";
const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request=>{
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWYxYmFkNTQxMzI5ZmRkYTdiYWQ5Y2Y3ZjdjOWMzNCIsInN1YiI6IjYyOTdiZGI5Y2E4MzU0MTM1NDcxNTRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FthCvYDGJRPsj94RCoBkJxYV68lDI-OYII8nfyfAz4';

    if (token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {
    apiService
}