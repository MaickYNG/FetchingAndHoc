import './App.css'
import { Route, BrowserRouter as Router , Routes, Link } from 'react-router-dom'

import Saludo from './components/Saludo'
import Eventos from './components/Eventos'
import Iteracion from './components/Iteracion'
import Fetching from './components/Fetching'
import Usuarios from './components/Usuarios'

function App() {
  
  return (
    <>
    
      <Router>
        <div className='container'>
          <div className='row'>

            <div className='col-4'><Link to={"/"}>Principal</Link></div>
            <div className='col-4'><Link to={"/Saludo/"}>Experiencia</Link></div>
            <div className='col-4'><Link to={"/Contacto/"}>Contacto</Link></div>
            <div className='col-4'><Link to={"/Searching/"}>Searching</Link></div>

          </div>
        </div>

        <div className='container'>
          <Routes>
            <Route path='/'element={<Fetching ></Fetching>}></Route>
            <Route path='/saludo/' element={ <Eventos></Eventos>}></Route>
            <Route path='/contacto' element={<Iteracion></Iteracion>}></Route>
            <Route path='/Searching' element={<Usuarios></Usuarios>}></Route>


          </Routes>
        </div>



      </Router>
    
    </>
  )
}

export default App
