import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import {API_Key} from "../services/API_Key"
import "../layout.css"




const apiKey = API_Key()
const moviesURl = "https://api.themoviedb.org/3/tv/"
const imgMovie = "https://image.tmdb.org/t/p/w500/"

interface Imovies{
  
  overview:string
  name:string
  map:Function
  length:number
  vote_average:string
  first_air_date:string
  
}

export function Series(){
    const [tv, setTv] = useState<Imovies>()
    const [page, setPage] = useState(1)
    

  const getTv = async(url:string)=>{
    const res = await fetch(url);
    const data  = await res.json();

    setTv(data.results)
  }

  console.log(tv)



  useEffect(()=>{
    const topRateUrl = `${moviesURl}top_rated?${apiKey}&language=pt-BR&page=${page}`;
    getTv(topRateUrl)
  },[page])

    return(
      <div className="text-center mt-2">
        <h1 className="text-3xl">Melhores Séries</h1>
        <div className="flex flex-wrap justify-center mt-5">  
              

          {tv &&
            tv?.map((element:any, index:number)=>{
              return(
                <div id="main" className="flex m-2 hover:shadow-md rounded-md " key={index}>
                    
                   <img src={imgMovie+element.poster_path} alt={"imagem de" + element.title}/>
                    

                    <div>
                    <h2>{element.name} ({element.first_air_date})</h2>

                    {element.overview ?(
                    <p className="m-2">
                      Sinopse: {element.overview}
                      </p>):
                    (<p>Não possui sinopse</p>)}

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