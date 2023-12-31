"use client";
import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Countery({ population, region, capital, name, flag }) {
  const router = useRouter();
  return (
    <Paper
      className=" aspect-[4/6] w-full sm:aspect-[1/1.4] shadow hover:cursor-pointer hover:shadow-lg hover:drop-shadow-lg sm:w-4/6"
      sx={{
        borderRadius: "0.375rem",
        bgcolor: "primary.main",
      }}
    >
      <div
        className="w-full h-full"
        onClick={() => {
          router.push(`/${name}`);
        }}
      >
        <Image
          className="h-1/2 w-full rounded-t-md"
          src={flag}
          alt="pic"
          width={400}
          height={400}
        />
        <Box sx={{ padding: "1rem" }}>
          <div className="flex align-middle ml-2 mb-4">
            <span className="font-extrabold text-lg">{name}</span>
          </div>
          <div className="flex align-middle m-2">
            <span className="font-bold mr-1">Copulation:</span>{" "}
            <span className="font-regular">{population}</span>
          </div>
          <div className="flex align-middle m-2">
            <span className="font-bold mr-1">Region:</span>{" "}
            <span className="font-regular">{region}</span>
          </div>
          <div className="flex align-middle m-2">
            <span className="font-bold mr-1">Capital:</span>{" "}
            <span className="font-regular">{capital}</span>
          </div>
        </Box>
      </div>
    </Paper>
  );
}

export default Countery;
