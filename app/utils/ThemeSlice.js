import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "./ThemeController";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: light },
  reducers: {
    toggle: (state) => {
      if (state.value.palette.mode === "light") {
        state.value = dark;
      } else {
        state.value = light;
      }
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
