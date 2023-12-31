"use client";
import { usePathname ,useRouter } from "next/navigation";
import NavBar from "../component/NavBar";
import useFetchSingleCountry from "../utils/FetchSingleCountry";
import Image from "next/image";
import { Paper, Typography } from "@mui/material";
import Field from "../component/Field";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Country() {
  const pathName = usePathname().split("/");
  const country = pathName[pathName.length - 1];

  const router = useRouter()

  let countryData = useFetchSingleCountry(country);
  countryData ? (countryData = countryData[0]) : (countryData = countryData);
  let Languages = [];
  let nativeName = "Loading...";
  let currencie = "Unkown";
  for (let l in countryData?.languages) {
    Languages.push(countryData?.languages[l]);
  }
  for (let n in countryData?.name?.nativeName) {
    nativeName = countryData?.name?.nativeName[n]?.common;
  }
  for (let c in countryData?.currencies) {
    currencie = countryData?.currencies[c]?.name;
  }

  return (
    <div className="h-screen w-screen sm:overflow-hidden">
      <NavBar />
      <div className="h-full flex flex-col justify-items-center items-start ">
      <div onClick={()=>{router.back()}}>
        <Paper className="p-2 sm:mt-20 mt-10 sm:ml-28 ml-10  font-regular px-4 flex items-center justify-items-center hover:cursor-pointer hover:shadow-lg">
          <KeyboardBackspaceIcon className="mr-2" />
          Back
        </Paper>
        </div>
        <div className=" mt-3 sm:mt-14 flex flex-col sm:flex-row justify-center w-full h-full sm:h-1/2 ">
          <div className="sm:w-1/3 aspect-square flex p-10">
            <Image
              className=" w-full h-full"
              src={countryData?.flags?.png}
              height={500}
              width={500}
              alt="flag"
            />
          </div>
          <div className="flex flex-col p-5 w-1/2 sm:mt-10 h-5/6 sm:justify-between">
            <Typography sx={{ marginLeft: "1rem", fontSize:'2.25rem' , lineHight:'2.5rem', fontWeight:'bold' }} className="mb-4">
              {countryData?.name?.common}
            </Typography>
            <div className=" px-5 py-2 sm:p-5 grid w-full h-[70%] sm:h-1/2 items-center  grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 sm:gap-8">
              <Field classes='row-start-1' label={"Native Name:"} value={nativeName} />
              <Field classes='row-start-7' label={"Top level Domain:"} value={countryData?.tld[0]} />
              <Field
              classes='row-start-2'
                label={"Population:"}
                value={countryData?.population.toLocaleString("en", {
                  useGrouping: true,
                })}
              />
              <Field classes='row-start-8' label={"currencie:"} value={currencie} />
              <Field classes='row-start-3' label={"Region:"} value={countryData?.region} />
              <Field classes='row-start-9' label={"Languages:"} value={Languages.join(", ")} />
              <Field classes='row-start-4' label={"Sub Region:"} value={countryData?.subregion} />
              <div className='row-start-6 h-3'></div>
              <Field  classes='row-start-5' label={"Capital:"} value={countryData?.capital} />
              
              
            </div>
            <div className="ml-5 flex flex-col sm:flex-row align-middle">
              <p className="font-semibold sm:mr-1 p-1 whitespace-nowrap mb-2 sm:mb-0 ">Border Countries:</p>
              <div className="flex ">
                {countryData?.borders  ? countryData?.borders?.map((el , i) => {
                  return (
                    <Paper key={i} className="p-2 mx-2 px-3" elevation={2}>
                      <p className="text-xs">{el}</p>
                    </Paper>
                  );
                })
                : <Paper className="p-2 mx-2 px-3">
                 No Borders
                </Paper>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
