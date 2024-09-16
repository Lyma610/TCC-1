
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
         <BrowserRouter>
           <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/Home' element={<Home/>}/>
           </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App
