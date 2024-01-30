import React, { useEffect, useState } from 'react'
import { GetBookData } from '../service/book.service';

const useFetch = (fetchFun, arg) => {
  const [data,setData] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    // (async() =>{
    //     const res = await fetch("http://localhost:8000/books");
    //     const data = await res.json();
    //     console.log(data);
    // }) ();
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((pre) => {
          return {
            error: null,
            loading: false,
            data: data,
          };
        });
      } catch (e) {
        setData((pre) => {
          return {
            error: e.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch