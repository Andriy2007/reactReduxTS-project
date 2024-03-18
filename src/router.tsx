import React from 'react';
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MoviePage, MoviesPage, SearchPage} from "./pages";
const router = createBrowserRouter([
  {
    path: ``, element: <MainLayout/>, children: [
        {
          index: true, element: <Navigate to={"movies"}/>
        },
      {
        path: 'movies', element: <MoviesPage/>
      },
      {
        path: 'movies/:id', element: <MoviePage/>
      },
      {
        path: 'genres', element: <GenrePage/>,children: [
            {
              index: true, element: <Navigate to={'movies'}/>}
          ,
          {
            path: 'movies', element: <MoviesPage/>,},
        ]
      },
      {path: 'search', element: <SearchPage/>,},
    ]
  }
  ])

export {
  router
}
