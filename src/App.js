import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import ThePagination from "./components/ThePagination/ThePagination";
import "./App.css";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1>
        Rick & Morty <span className="text-head">Pagination</span>
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>
        <Grid item xs={9}>
          <Cards data={results} />
        </Grid>
      </Grid>
      <ThePagination data={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
