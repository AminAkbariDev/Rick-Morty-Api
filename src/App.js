import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar/Navbar";
import { Grid } from "@mui/material";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import ThePagination from "./components/ThePagination/ThePagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./Pages/Statistics";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  console.log(info);
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Filters
            setPageNumber={setPageNumber}
            setGender={setGender}
            setStatus={setStatus}
            setSpecies={setSpecies}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <Cards data={results} />
        </Grid>
      </Grid>
      <ThePagination
        cards={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
