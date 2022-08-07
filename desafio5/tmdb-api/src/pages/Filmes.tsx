import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import {API_Key} from "../services/API_Key"
import "../layout.css"



const apiKey = API_Key()
const moviesURl = "https://api.themoviedb.org/3/movie/"
const imgMovie = "https://image.tmdb.org/t/p/w500/"

interface Imovies{
  
  overview:string
  title:string
  map:Function
  length:number
  vote_average:string
  release_date:string
  
  
}

export function Filmes(){
    const [movies, setMovies] = useState<Imovies>()
    const [moviesDetails, setMoviesDetails] = useState<Imovies>()
    const [page, setPage] = useState(1)
    

  const getMovies = async(url:string)=>{
    const res = await fetch(url);
    const data  = await res.json();

    setMovies(data.results)
  }

 console.log(movies)

  useEffect(()=>{
    const topRateUrl = `${moviesURl}top_rated?${apiKey}&language=pt-BR&page=${page}`;
    getMovies(topRateUrl)
    
  },[page])
  
  console.log(moviesDetails)

    return(
      <div className="flex flex-col items-center" >
        <h1 className="text-3xl m-2">Melhores filmes</h1>
        <div className="flex flex-wrap m-5">  
              

          {movies &&
            movies?.map((element:any, index:number)=>{
             
              return(
                <div id="main" className="flex m-2 hover:shadow-md rounded-md text-center" key={index}>
                    
                   <img src={imgMovie+element.poster_path} alt={"imagem de" + element.title}/>
                    

                    <div>
                    <h2>{element.title}({element.release_date})</h2>
                    <p className="m-2">Sinopse: {element.overview}</p>
                    </div>

                    <div id="avaliate">
                    <p className="">{element.vote_average * 10}%</p>
                    </div>
                </div>        
              )
            
            
          }
          
          )}
          
        </div>
        <div className='flex justify-center m-2'>
          <button onClick={()=> {if(page>1){setPage(page-1)}}}  className=" border-2 w-6 mr-1 overflow-hidden">
            <AiFillCaretLeft className="float-left" size={25}/>
          </button>
          
          <span className="border-2 w-20 text-center ">
            Página {page}
          </span>

          <button onClick={()=> setPage(page+1) }  className=" border-2 w-6 h-8 ml-1 overflow-hidden">
            <AiFillCaretRight className="float-right" size={30}/>
          </button>
        </div>
        </div>
    )
}