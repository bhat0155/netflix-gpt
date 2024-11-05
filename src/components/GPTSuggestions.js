import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTSuggestions = () => {
  const geminiMovies=useSelector((store)=>store.GPTView.geminiResults)

  const tmdbMovies=useSelector((store)=>store.GPTView.tmdbResults)
  if (!geminiMovies) return;
  if (!tmdbMovies) return;

  console.log(geminiMovies);
  console.log(tmdbMovies)
  return (

    <div className='bg-black'>
      <h2>Search suggestions</h2>
      {geminiMovies?.map((item, index)=>{
        return (
          <MovieList key={item} title={item} movies={tmdbMovies[index]}/>
        )
      })}
    </div>
  )
}

export default GPTSuggestions