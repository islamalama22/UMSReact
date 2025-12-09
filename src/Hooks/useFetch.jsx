import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(path) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsErro] = useState("");
  const getData = async () => {
    try {
      const resposne = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);

      const usersData = resposne.data;
      setData(usersData);
    } catch (err) {
      setIsErro(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { data, isLoading, isError };
}

export default useFetch;
