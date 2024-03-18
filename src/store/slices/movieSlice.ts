import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import { moviesService} from "../../services";
import {IMovies, IMovie, IMoviesInfo} from "../../interfaces";

interface IState {
    movies: IMovies[],
    movie: IMovie,
    checked: false,
}

const initialState: IState = {
    movies: null,
    movie: null,
    checked: false,
};

const getAllMovies = createAsyncThunk<IMoviesInfo, {genre: string, page: string}>(
    'movieSlice/getAllMovies',
    async ({genre,page},  thunkAPI ) => {
        try {
            const {data} = await moviesService.getAllMovies(page,genre);
            return data;
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const getMovieById = createAsyncThunk<IMovie, string>(
    'movieSlice/getMovieById',
    async (id,  thunkAPI ) => {
        try {
            const {data} = await moviesService.getMovieById(String(id));
            return data;
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const searchMovies = createAsyncThunk<IMoviesInfo,  {page: string, query: string}>(
    'searchMovies',
    async ({page, query} , thunkAPI ) => {
        try {
            const {data} = await moviesService.searchMovies(page,query);
            return data;
        } catch (e) {
           const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changeToggle: (state, action) => {
            state.checked = action.payload
        }
        },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                   state.movies = results;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results;
    })
})
const {reducer: movieReducer, actions: {changeToggle}} = movieSlice;

const movieActions = {
    getAllMovies,
    searchMovies,
    getMovieById,
    changeToggle
}

export {
    movieReducer,
    movieActions
}