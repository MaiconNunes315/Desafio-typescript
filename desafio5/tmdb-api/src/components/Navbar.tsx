import { useState } from 'react'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { useNavigate, Link } from 'react-router-dom'

export function Navbar(){

    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e:any)=>{
        e.preventDefault()

       if(search){

        navigate(`/search?q=${search}`)
        setSearch('')
       }
    }


    return(
        <div className='bg-amber-600 flex items-center justify-around  h-20 '>
            <div className='w-52 flex justify-between text-lg'>
            <Link to='/'><h2 className='hover:font-bold'>Top filmes</h2></Link>
            <Link to='/series'><h2 className='hover:font-bold'>Top séries</h2></Link>
            </div>
            
           

            <form onSubmit={handleSubmit} className='flex justify-center'>
                
                <input type='text' className='h-8 w-64 mr-2' placeholder='Buscar filme'
                onChange={(e)=> setSearch(e.target.value)}
                value={search}/>

                <button type='submit' className='bg-white h-8 w-24 overflow-hidden rounded-md hover:border-black border-2 hover:shadow-md hover:shadow-slate-700 '>
                    <BiSearchAlt2 size={25} className='h-full inline float-left'/>
                    <p className='text-xl '>Buscar</p>
                </button>
            </form>
        </div>
    )
}