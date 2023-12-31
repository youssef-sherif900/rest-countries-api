'use client'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useSelector as UseSelector } from "react-redux";

export default function country({children}){
    const theme = UseSelector(state => state.theme.value)
    return(
        <html lang="en">
      <head>
      </head>
      <ThemeProvider theme={theme}>
          <body>{children}</body>
          <CssBaseline/>
        </ThemeProvider>
    </html>
    )
}