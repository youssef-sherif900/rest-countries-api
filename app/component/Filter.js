"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { BootstrapInput } from "./Bootstrap";
import { useDispatch } from "react-redux";
import { region, search } from "../utils/FilterSlice";
// import SearchIcon from "@mui/icons-material/Search";

function Filter() {
  const dispatch = useDispatch();
  let handleChoice = (c) => {
    dispatch(region(c));
  };
  return (
    <div className="w-full flex justify-around sm:justify-between align-middle sm:px-[3.75rem] mt-10">
      <FormControl>
        <InputLabel className='flex'>
          {/* <SearchIcon /> */}
           <p className='ml-5'>search for a country...</p>
        </InputLabel>
        <BootstrapInput
          onChange={(e) => {
            dispatch(search(e.target.value));
          }}
        />
      </FormControl>
      <FormControl>
        <InputLabel className="text-sm">Filter by Region</InputLabel>
        <Select label="Filter by Region" className=" w-[8rem] sm:w-[10rem]">
          <MenuItem value={"Africa"} onClick={() => handleChoice("africa")}>
            Africa
          </MenuItem>
          <MenuItem value={"America"} onClick={() => handleChoice("america")}>
            America
          </MenuItem>
          <MenuItem value={"Asia"} onClick={() => handleChoice("asia")}>
            Asia
          </MenuItem>
          <MenuItem value={"Oceania"} onClick={() => handleChoice("oceania")}>
            Oceania
          </MenuItem>
          <MenuItem value={"Europe"} onClick={() => handleChoice("europe")}>
            Europe
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
