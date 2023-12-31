"use client";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import {Provider} from 'react-redux'
import store from './utils/store'


const inter = Nunito_Sans({
   subsets: ["latin"],
   display:'swap' 
  });



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
      </head>
      <Provider store={store}>
          <body className={inter.className}>{children}</body>
        </Provider>
    </html>
  );
}
