import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../http-client";
import publicActionTypes from "./action-types";

const getPopularMoviesListAction = createAction(
  publicActionTypes.GET_POPULAR_MOVIES_LIST
);

const toggleLoadingAction = createAction(publicActionTypes.TOGGLE_LOADING);

const getMovieGenresAction = createAction(publicActionTypes.GET_MOVIE_GENRES);

const getTvGenresAction = createAction(publicActionTypes.GET_TV_GENRES);

const getSingleSimilarMoviesAction = createAction(
  publicActionTypes.GET_SINGLE_SIMOLAR_MOVIES
);

const toggleInnerLoadingAction = createAction(
  publicActionTypes.TOGGLE_INNER_LOADING_ACTION
);

const getMovieVideosAction = createAction(publicActionTypes.GET_MOVIE_VIDEOS);

const getMoviePostersAction = createAction(publicActionTypes.GET_MOVIE_POSTERS);

const getSearchMoviesAction = createAction(publicActionTypes.GET_SERACH_MOVIES);

const getGenreMoviesAction = createAction(publicActionTypes.GET_GENRE_MOVIES);

const getPeopleAction = createAction(publicActionTypes.GET_PEOPLE);

const popularMoviesListFetch = createAsyncThunk(
  "popularMoviesList/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      console.log("hi");
      const res = await fetch(url);
      const jsonRes = await res.json();
      console.log(jsonRes);
      // const fetch = await httpClient(url);
      dispatch(getPopularMoviesListAction(jsonRes.results));
    } catch (error) {
      console.log("some error");
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

const movieGenresFetch = createAsyncThunk(
  "getGenres/fetch",
  async (payload, thunkOptions) => {
    const { dispatch } = thunkOptions;
    try {
      const res = await fetch(payload[0]);
      const jsonRes = await res.json();
      console.log(payload);
      if (payload[1] === "movie") {
        dispatch(getMovieGenresAction(jsonRes.genres));
      } else {
        dispatch(getTvGenresAction(jsonRes.genres));
      }
    } catch (error) {
      console.log("some error");
    }
  }
);

const singleSimilarMoviesFetch = createAsyncThunk(
  "getSimilars/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    try {
      const res = await fetch(url);

      if (res.ok) {
        const jsonRes = await res.json();
        dispatch(getSingleSimilarMoviesAction(jsonRes.results));
      }
      throw new Error(res.status);
    } catch (error) {
      console.log(error);
    }
  }
);

const moviePostersFetch = createAsyncThunk(
  "moviePosters/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    // dispatch(toggleInnerLoadingAction(true));
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      dispatch(getMoviePostersAction(jsonRes));
    } catch (error) {
      console.log("some error");
    } finally {
      // dispatch(toggleInnerLoadingAction(false));
    }
  }
);

const movieVideosFetch = createAsyncThunk(
  "movieVideos/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    // dispatch(toggleInnerLoadingAction(true));
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      dispatch(getMovieVideosAction(jsonRes.results));
    } catch (error) {
      console.log("some error");
    } finally {
      // dispatch(toggleInnerLoadingAction(false));
    }
  }
);

const searchMovieFetch = createAsyncThunk(
  "searchMovies/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      const res = await fetch(url);
      if (res.ok) {
        const jsonRes = await res.json();
        dispatch(getSearchMoviesAction(jsonRes.results));
      }
      throw new Error(res.status);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

const genreMoviesFetch = createAsyncThunk(
  "genresMovies/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      const res = await fetch(url);
      if (res.ok) {
        const jsonRes = await res.json();
        // console.log(jsonRes);
        dispatch(getGenreMoviesAction(jsonRes.results));
      }
      throw new Error(res.status);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

const getPeopleFetch = createAsyncThunk(
  "getPeople/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      const res = await fetch(url);
      if (res.ok) {
        const jsonRes = await res.json();
        dispatch(getPeopleAction(jsonRes.results));
      }
      throw new Error(res.status);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

export {
  getPopularMoviesListAction,
  popularMoviesListFetch,
  movieGenresFetch,
  getMovieGenresAction,
  getTvGenresAction,
  toggleLoadingAction,
  getSingleSimilarMoviesAction,
  singleSimilarMoviesFetch,
  getMoviePostersAction,
  moviePostersFetch,
  movieVideosFetch,
  getMovieVideosAction,
  getSearchMoviesAction,
  searchMovieFetch,
  genreMoviesFetch,
  getGenreMoviesAction,
  getPeopleAction,
  getPeopleFetch,
};
