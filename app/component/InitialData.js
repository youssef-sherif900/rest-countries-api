import { useFetchAll } from "../utils/FetchAllHook";
import Countery from "./Countery";
import CircularProgress from "@mui/material/CircularProgress";

function InitialData() {
  const { data } = useFetchAll();

  return data === null ? (
    <div className="col-start-1 md:col-start-2 flex justify-self-center  md:justify-self-end  h-[20rem] ">
    <CircularProgress className=" self-center md:self-end " color="inherit" />
    </div>
  ) : (
      data.slice(0, 12).map((country) => {
        return (
          <Countery
            name={country.name.common}
            population={country.population.toLocaleString("en", {
              useGrouping: true,
            })}
            region={country.region}
            capital={country.capital[0]}
            flag={country.flags.png}
          />
        );
      })
  );
}

export default InitialData;
