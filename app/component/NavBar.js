"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";
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
    <AppBar position="static" className=" p-2">
        <Toolbar>
      <Typography component='div' sx={{ flexGrow: 1 , fontWeight:'bold' }}  className="sm:ml-10 text-lg sm:text-2xl whitespace-nowrap">
        Where in the world?
      </Typography>
      <button className="sm:mr-10" onClick={handleTheme}>
        <Typography sx={{fontWeight:'600'}} variant="body1" className="flex font-semibold whitespace-nowrap">
          {theme.palette.mode === "light" ? <LightMoon /> : <DarkMoon />}
          Dark Mode
        </Typography>
      </button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
