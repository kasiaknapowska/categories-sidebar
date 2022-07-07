import { createSlice } from "@reduxjs/toolkit";

export const leaguesGamesSlice = createSlice({
  name: "leaguesGames",
  initialState: {
    league: undefined,
    leagues: [],
    games: [],
  },
  reducers: {
    setLeague: (state, action) => {
      if (state.league === action.payload) {
        state.league = undefined;
      } else {
        state.league = action.payload;
      }
    },
    resetLeague: (state) => {
      state.league = undefined;
    },
    setLeagues: (state, action) => {
      const isLeagueOpen = state.leagues.find(
        (league) => league === action.payload
      );

      if (isLeagueOpen) {
        state.leagues = state.leagues.filter(
          (league) => league !== action.payload
        );
      } else {
        state.leagues = [...state.leagues, action.payload];
      }
    },
    setGames: (state, action) => {
      const isGameChecked = state.games.find((game) => game === action.payload);

      if (isGameChecked) {
        state.games = state.games.filter((game) => game !== action.payload);
      } else {
        state.games = [...state.games, action.payload];
      }
    },
    resetGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const { setLeague, resetLeague, setLeagues, setGames, resetGames } =
  leaguesGamesSlice.actions;
export default leaguesGamesSlice.reducer;
