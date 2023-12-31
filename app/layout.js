"use client";
import { Inter } from "next/font/google";
import "./globals.css";


import {Provider} from 'react-redux'
import store from './utils/store'


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Manrope:wght@800&family=Nunito+Sans:opsz@6..12&display=swap"
          rel="stylesheet"
        />
      </head>
      <Provider store={store}>
          <body className={inter.className}>{children}</body>
        </Provider>
    </html>
  );
}
