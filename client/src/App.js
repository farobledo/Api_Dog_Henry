import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';


function App() {
  return (
    
      <div className="App">
        <Routes> 
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route path='/dogs' element={<DogCreate/>} />
          <Route path='/home/:id' element={<Detail/>} />
        </Routes>
      </div>
    
  );
}

export default App;