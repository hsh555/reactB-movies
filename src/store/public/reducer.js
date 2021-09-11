import { createReducer } from "@reduxjs/toolkit";
import {
  getGenreMoviesAction,
  getMovieGenresAction,
  getMoviePosters,
  getMoviePostersAction,
  getMovieVideosAction,
  getPeopleAction,
  getPopularMoviesListAction,
  getSearchMoviesAction,
  getSingleSimilarMoviesAction,
  getTvGenresAction,
  toggleLoadingAction,
} from "./action";
import publicState from "./state";

const publicReducer = createReducer(publicState, {
  [getPopularMoviesListAction.type]: (state, action) => {
    return {
      ...state,
      popularMoviesList: action.payload,
    };
  },
  [getMovieGenresAction.type]: (state, action) => {
    return {
      ...state,
      movieGenres: action.payload,
    };
  },
  [getTvGenresAction.type]: (state, action) => {
    return {
      ...state,
      tvGenres: action.payload,
    };
  },
  [toggleLoadingAction.type]: (state, action) => {
    return {
      ...state,
      toggleLoading: action.payload,
    };
  },
  [getSingleSimilarMoviesAction.type]: (state, action) => {
    return {
      ...state,
      singleSimilarMovies: action.payload,
    };
  },
  [getMoviePostersAction.type]: (state, action) => {
    return {
      ...state,
      moviePosters: [...action.payload.posters],
      movieBackdrops: [...action.payload.backdrops],
    };
  },
  [getMovieVideosAction.type]: (state, action) => {
    return {
      ...state,
      movieVideos: action.payload,
    };
  },
  [getSearchMoviesAction.type]: (state, action) => {
    return {
      ...state,
      searchMovies: action.payload,
    };
  },
  [getGenreMoviesAction.type]: (state, action) => {
    return {
      ...state,
      genreMovies: action.payload,
    };
  },
  [getPeopleAction.type]: (state, action) => {
    return {
      ...state,
      people: action.payload,
    };
  },
});

export default publicReducer;
