import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { API_Key } from "../services/API_Key"
 

const searchURl = "https://api.themoviedb.org/3/search/movie"
const apiKey = API_Key()
const imgMovie = "https://image.tmdb.org/t/p/w500/"

interface Imovies{
  
    title:string
    map:Function
    poster_path:string
    vote_average:string
    release_date:string
  }

export function Search(){

    const [searchParams] = useSearchParams()
    const [movies, setMovies] =  useState<Imovies>()
    const query = searchParams.get("q")
    

    const getSearchMovies = async(url:string)=>{
        const res = await fetch(url);
        const data  = await res.json();
    
        setMovies(data.results)
      }
    
      console.log(movies)
    
    
      useEffect(()=>{
        const searchQueryURL = `${searchURl}?${apiKey}&query=${query}&language=pt-BR`;
        getSearchMovies(searchQueryURL)

        console.log(searchQueryURL)
      },[query])

    return(
      <div className="text-center mt-2">
      <h1 className="text-3xl">Melhores filmes</h1>
      <div className="flex flex-wrap justify-center mt-5">  
            

        {movies &&
          movies?.map((element:any, index:number)=>{
            return(
              <div id="search" className="w-56 m-2 hover:shadow-md rounded-md" key={index}>
                <img className="w-54" src={imgMovie+element.poster_path}/>
             
              <h2>{element.title}({element.release_date})</h2>
             <p id="avaliate" className="">{element.vote_average * 10}%</p>
              </div>
          
            )
          
          
        }
        
        )}
        
      </div>
   
      </div>
    )
}