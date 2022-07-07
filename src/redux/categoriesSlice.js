import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    sports: {},
    eSports: {},
  },
  reducers: {
    setSports: (state, action) => {
      const sportLvl1 = action.payload
        .filter((el) => el.level === 1 && !el.categoryName.includes("Esport"))
        .sort((a, b) => a.sortOrder - b.sortOrder);
      const sportLvl2 = action.payload
        .filter((el) =>
          sportLvl1.some((filter) => filter.categoryId === el.parentCategory)
        )
        .sort((a, b) => a.sortOrder - b.sortOrder);
      const sportLvl3 = action.payload
        .filter((el) =>
          sportLvl2.some((filter) => filter.categoryId === el.parentCategory)
        )
        .sort((a, b) => a.sortOrder - b.sortOrder);

      if (sportLvl1 && sportLvl2 && sportLvl3) {
        state.sports = {
          lvl1: [...sportLvl1],
          lvl2: [...sportLvl2],
          lvl3: [...sportLvl3],
        };
      }
    },

    setEsports: (state, action) => {
      const eSportLvl1 = action.payload
        .filter((el) => el.level === 1 && el.categoryName.includes("Esport"))
        .sort((a, b) => a.sortOrder - b.sortOrder);
      const eSportLvl2 = action.payload
        .filter((el) =>
          eSportLvl1.some((filter) => filter.categoryId === el.parentCategory)
        )
        .sort((a, b) => a.sortOrder - b.sortOrder);
      const eSportLvl3 = action.payload
        .filter((el) =>
          eSportLvl2.some((filter) => filter.categoryId === el.parentCategory)
        )
        .sort((a, b) => a.sortOrder - b.sortOrder);

      if (eSportLvl1 && eSportLvl2 && eSportLvl3) {
        state.eSports = {
          lvl1: [...eSportLvl1].sort((a, b) => a.sortOrder - b.sortOrder),
          lvl2: [...eSportLvl2],
          lvl3: [...eSportLvl3],
        };
      }
    },
  },
});

export const { setSports, setEsports } = categoriesSlice.actions;
export default categoriesSlice.reducer;
