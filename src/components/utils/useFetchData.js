import React, { useEffect, useState } from 'react'
import { url } from './constant';

const useFetchData = () => {
  const [data,setData] = useState(null);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() =>{
    const val = await fetch(url);
    const json = await val.json();
    setData(json)
  }

  // console.log(data)
  return data;
}

export default useFetchData
