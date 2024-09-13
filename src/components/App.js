import React, { useState } from 'react'
import useFetchData from './utils/useFetchData'

const App = () => {
  const [quote,setQuote] = useState("Get the quote")
  const data = useFetchData();
  console.log(data)
  

  return (
    <div className='font-mono h-screen w-screen bg-gradient-to-br from-fuchsia-900 to-emerald-100'>
      <div className='absolute h-fit w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 px-2 py-10 text-center border-2 border-black border-solid rounded-lg'>
        <div className='font-semibold text-4xl underline'>Quote Generator</div>
        <div className='text-2xl m-5'>{quote}</div>
        <button className='py-2 px-5 border-solid border-black border-2 rounded-lg bg-teal-400 active:p-1 capitalize font-bold' onClick={()=>{setQuote(data.text)}}>
            fetch
        </button>
      </div>
    </div>
  )
}

export default App
