import React from 'react'
import Tag from './components/Tag'
import Random from './components/Random'

const App = () => {

  return (
    <div className='background w-full h-screen flex flex-col items-center  '>
      <h1 className='w-11/12 rounded-lg bg-white 
      text-center mt-[40px] py-2 px-10 text-3xl font-bold uppercase '>Random Gifs Generator</h1>
      <div className='w-full flex justify-center items-center  mt-[40px]'>
          <Random/>
          <Tag/>
      </div>
    </div>
    
  )
}

export default App