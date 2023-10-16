import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./common/Navbar/Navbar";
import { Grid } from "@mui/material";
import Loader from './common/Loader/Loader'
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import ThePagination from "./components/ThePagination/ThePagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./Pages/Statistics";
import "./App.css";
import { useInfiniteQuery } from "@tanstack/react-query";

// `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`

const getUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  )
  const data = await res.json()
  return { ...data, prevOffset: pageParam }
}


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
  let [loading, setLoading] = useState(true)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await axios.get(api);
      updateFetchedData([data.data])
    })();
  }, [pageNumber]);


  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: getUsers,
    getNextPageParam: lastPage => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }

      return lastPage.prevOffset + 10;
    }
  })

  const characters = data?.pages.reduce((acc, character) => {
    return [...acc, ...character.results];
  }, [])


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLoading(true)
      setPageNumber(perv => perv + 1)
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Cards data={characters} />
        </Grid>
      </Grid>
      <InfiniteScroll
        dataLength={characters ? characters.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loading={<Loader />}
      />
      {loading && <Loader />}
      <ThePagination
        cards={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
