import Countery from "./Countery";
import { useSelector } from "react-redux";
import { useFilterRegion } from "../utils/FilterCountryHook";
import InitialData from "./InitialData";
import useSearchHook from "../utils/SearchHook";

function Content() {
  const region = useSelector((state) => state.filter.filter);

  const search = useSelector((state) => state.filter.search)

  const searchData = useSearchHook(search)

  const { regionData } = useFilterRegion(region);

  return (
    <div className="px-[3.75rem]  w-full  grid lg:grid-cols-4  gap-y-[2rem] gap-x-[0.5rem]  mt-8 md:justify-items-center justify-items-center md:grid-cols-1 ">
      {
        Array.isArray(searchData)
         ?
         searchData.map((country , i) => {
          return (
            <Countery
            key={i}
              name={country.name.common}
              population={country.population.toLocaleString("en", {
                useGrouping: true,
              })}
              region={country.region}
              capital={country.capital ? country.capital[0] : "Unkown"}
              flag={country.flags.png}
            />
          );
        })

        :
        
        regionData == null ? (
        <InitialData />
      ) : (
          Array.isArray(regionData) ?
        regionData?.map((country , i) => {
          return (
            <Countery
            key={i}
              name={country.name.common}
              population={country.population.toLocaleString("en", {
                useGrouping: true,
              })}
              region={country.region}
              capital={country.capital ? country.capital[0] : "Unkown"}
              flag={country.flags.png}
            />
          );
        })
        : "Loading..."
      )}
    </div>
  );
}

export default Content;
