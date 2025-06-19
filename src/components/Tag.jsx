import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import axios from 'axios';


const API_KEY='QNfLXjo4G2VmsiGYwci4LjbgUOAuSO6S';

const Tag = () => {

    const [tag,setTag]=useState('car');
    const [gif, setGif]=useState("");
    const [loading ,setloading]=useState(false);

    async function fetchData(){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const {data}= await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setloading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (

    <div className='w-1/2 max-w-[550px] mx-auto border rounded-lg border-black flex flex-col items-center gap-y-6 mt-[15px] bg-blue-500 mb-8'>
        <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>

        {loading?<Spinner/> : <img className="w-[450px] h-[280px] object-cover" src={gif} width={450} />}

        <input 
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-amber-100"
        type="text" onChange={(event) => setTag(event.target.value)} value={tag}
        placeholder='Enter Memes you want to see...' />

        <button
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-4"
        onClick={()=>fetchData()}
        >Generate
        </button>
    </div>

  )
}

export default Tag