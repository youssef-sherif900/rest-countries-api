"use client";
import { AppBar, Typography } from "@mui/material";
import { DarkMoon, LightMoon } from "../assets/Moon";
import { useDispatch,useSelector } from "react-redux";
import { toggle } from "../utils/ThemeSlice";

function NavBar() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value)

  let handleTheme = () => {
    dispatch(toggle());
  };

  return (
    <AppBar position="static" className="flex flex-row p-5">
      <Typography  className="mr-auto sm:ml-10 text-lg font-bold sm:text-2xl whitespace-nowrap">
        Where in the world?
      </Typography>
      <button className="sm:mr-10" onClick={handleTheme}>
        <Typography variant="body1" className="flex font-semibold whitespace-nowrap">
          {theme.palette.mode === "light" ? <LightMoon /> : <DarkMoon />}
          Dark Mode
        </Typography>
      </button>
    </AppBar>
  );
}

export default NavBar;
