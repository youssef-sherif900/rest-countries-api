'use client'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

export default function country({children}){
    const theme = useSelector(state => state.theme.value)
    return(
        <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Manrope:wght@800&family=Nunito+Sans:opsz@6..12&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider theme={theme}>
          <body>{children}</body>
          <CssBaseline/>
        </ThemeProvider>
    </html>
    )
}