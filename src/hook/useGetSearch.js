// useGetSearch

import { useState } from "react";
import { getSearchResults } from "../services/api";

export const useGetSearch = (params = {}) => {
  const { mediaType, query } = params;
  const [records, setRecords] = useState();
  const [isloading, setIsLoading] = useState(false);
  const handleSearch = () => {
    setIsLoading(true);
    getSearchResults(mediaType, query)
      .then((response) => {
        setRecords(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Error", `An error occurred! ${error}`);
      });
  };
  return {
    handleSearch,
    records,
    isloading,
  };
};
