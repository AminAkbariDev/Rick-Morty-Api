import React, { useEffect } from "react";
import { Pagination } from "@mui/material";

const ThePagination = ({ data, pageNumber, setPageNumber }) => {
  const handleChange = (e, p) => {
    setPageNumber(p);
  };

  return (
    <div className="center mt-2">
      <Pagination
        count={data?.pages}
        size="large"
        page={pageNumber}
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

export default ThePagination;
