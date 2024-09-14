import React, { useState } from 'react'
import { url } from './utils/constant';
// import useFetchData from './utils/useFetchData'

const App = () => {
  const [data,setData] = useState(null)

  const fetchData = async() =>{
    const val = await fetch(url);
    const json = await val.json();
    setData(json)
  }

  return (
    <div className='font-mono h-screen w-screen bg-gradient-to-br from-fuchsia-900 to-emerald-100'>
      <div className='absolute h-fit w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 px-2 py-10 text-center border-2 border-black border-solid rounded-lg'>
        <div className='font-semibold text-4xl underline'>Quote Generator</div>
        <div className='text-2xl m-5'>{data?data.text:"Get the quote"}</div>
        {data && <div className='font-extrabold text-2xl'>-{data.author}</div>}
        <button className='mt-3 py-2 px-5 border-solid border-black border-2 rounded-lg bg-teal-400 active:p-1 capitalize font-bold' onClick={()=>{fetchData()}}>
            fetch
        </button>
      </div>
    </div>
  )
}
// console.log("rendered")

export default App
