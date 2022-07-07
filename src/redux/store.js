import { configureStore } from "@reduxjs/toolkit";
import categoriesSliceReducer from "./categoriesSlice";
import leaguesGamesReducer from "./leaguesGamesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    leaguesGames: leaguesGamesReducer,
  },
});
