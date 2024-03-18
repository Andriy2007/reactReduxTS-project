import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genreService} from "../../services";
import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[],
}

const initialState: IState = {
    genres: null,
};

const getAllGenres = createAsyncThunk<IGenre>(
    'genreSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAllGenres();
            return data;
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres;

            })
})
const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAllGenres
}

export {
    genreReducer,
    genreActions
}