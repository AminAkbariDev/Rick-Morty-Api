import React from "react";
import { Pagination } from "@mui/material";

const ThePagination = ({ cards, pageNumber, setPageNumber }) => {
  const handleChange = (e, p) => {
    setPageNumber(p);
  };

  return (
    <div className="center mt-2 mb-3">
      <Pagination
        count={cards?.pages}
        size="large"
        page={pageNumber}
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

export default ThePagination;
