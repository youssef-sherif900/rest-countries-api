'use client'
import Content from "./component/Content";
import Filter from "./component/Filter";
import NavBar from "./component/NavBar";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useSelector} from 'react-redux'
export default function Home() {
  const theme = useSelector(state => state.theme.value)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Filter />
        <Content />
      </ThemeProvider>
    </>
  );
}
