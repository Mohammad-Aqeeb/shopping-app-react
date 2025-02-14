import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';

function App(){
  return (
    <div className='MainContainer'>
      <Navbar/>

      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>  
  )
}

export default App;
