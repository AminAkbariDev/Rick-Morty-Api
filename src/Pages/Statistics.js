import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Statistics = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}/`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "gender",
      headerName: "Gender",
      width: 90,
    },
    {
      field: "species",
      headerName: "Species",
      width: 160,
    },
  ];

  const rows = [];

  results?.map((p) => {
    rows.push({
      id: p.id,
      name: p.name,
      status: p.status,
      gender: p.gender,
      species: p.species,
    });
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default Statistics;
