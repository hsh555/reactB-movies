import routePathes from "./route-pathes";
import {
  HomePage,
  MoviesGenrePage,
  MoviesListPage,
  NotFoundPage,
  PeoplePage,
  SingleMoviePage,
  TvGenrePage,
} from "../../pages";
import MainLayout from "../../components/layouts/main-layout";
import FullWidthLayout from "../../components/layouts/fullwidth-layout";

const routes = [
  {
    id: 0,
    name: "Home",
    path: routePathes.HOME,
    component: HomePage,
    layout: MainLayout,
  },
  {
    id: 1,
    name: "SingleMovie",
    path: routePathes.SINGLE_MOVIE,
    component: SingleMoviePage,
    layout: MainLayout,
  },
  {
    id: 2,
    name: "MoviesGenre",
    path: routePathes.MOVIES_GENRE,
    component: MoviesGenrePage,
    layout: MainLayout,
  },
  {
    id: 3,
    name: "MoviesList",
    path: routePathes.MOVIES_LIST,
    component: MoviesListPage,
    layout: MainLayout,
  },
  {
    id: 4,
    name: "TvGenre",
    path: routePathes.TV_GENRE,
    component: TvGenrePage,
    layout: MainLayout,
  },
  {
    id: 5,
    name: "TvList",
    path: routePathes.TV_LIST,
    component: MoviesListPage,
    layout: MainLayout,
  },

  {
    id: 6,
    name: "People",
    path: routePathes.PEOPLE,
    component: PeoplePage,
    layout: MainLayout,
  },
  {
    id: 7,
    name: "NotFound",
    path: routePathes.NOT_FOUND,
    component: NotFoundPage,
    layout: FullWidthLayout,
  },
];

export default routes;
