
import {Routes, Route} from 'react-router-dom'
import {Search} from './pages/Search'
import {Navbar} from './components/Navbar'
import { Filmes } from './pages/Filmes'
import { Series } from './pages/Series'



function App() {
  
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        
        <Route path='/' element={<Filmes/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='search' element={<Search />}/>
     </Routes>
    </div>
  )
}

export default App
