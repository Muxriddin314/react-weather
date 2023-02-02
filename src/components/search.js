import React, { useState } from 'react';
import fetchWeather from './fetchWeather';

const Search = () =>{
    const [query, setQuery] = useState("")
    const [weather, setWeather]=useState({})

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data)
            setQuery()
            console.log(data); 
        }
    }
    return (
        <div>
            <div className='bg-blue-500  pb-3 w-full'>
                <input type="text" placeholder='Search' value={query} onChange={(e)=> setQuery(e.target.value)}
                onKeyPress ={search} /> 
            </div>
            {weather.main && (
                <div className=''>
                    <div>
                    
                    </div>
                    <div className='bg-blue-400 shadow-xl w-1/4 rounded-2xl py-32 px-8 mt-10 mx-auto'>
                        <h2 className='text-white text-4xl'>
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div>
                            <p className='text-3xl'>{weather.main.temp}</p>
                            <sup className='text-white'>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>    
                </div>
            )}
        </div>
    )
}

export default Search