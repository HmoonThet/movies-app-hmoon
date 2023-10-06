import { ACCESS_TOKEN_AUTH, BASE_URL } from "../config/apiConfig";


export const getRecords = async (mediaType, listType) => {
    const params = new URLSearchParams({
      language: 'en-US',
      page: '1'
    });
    const url = `${BASE_URL}/${mediaType}/${listType}?${params.toString()}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const getRecord = async (mediaType, id) => {
    const params = new URLSearchParams({
      language: 'en-US'
    });
    const url = `${BASE_URL}/${mediaType}/${id}?${params.toString()}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const getSearchResults = async (mediaType, query) => {
    const params = new URLSearchParams({
      query: query,
      include_adult: 'false',
      language: 'en-US',
      page: '1'
    });
    const url = `${BASE_URL}/search/${mediaType}?${params.toString()}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  };