import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./ThemeSlice"
import filterReducer from "./FilterSlice"


export default configureStore({
  reducer: {
    theme:themeReducer,
    filter:filterReducer,
  },
});
