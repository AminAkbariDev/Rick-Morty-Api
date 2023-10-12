import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import { Grid } from "@mui/material";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let handleClear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div>
      <h2 className="text-primary text-head ">Filters</h2>
      <div onClick={handleClear} className="text-center link mb-3">
        Clear Filters
      </div>

      <Grid className="margin-auto" xs={10}>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </Grid>
    </div>
  );
};

export default Filters;
