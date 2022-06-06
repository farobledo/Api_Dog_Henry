import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';



// const AppWrapper = () => {
//   const store = createStore(rootReducer);

//   return (
//     <Provider store={store}> // Set context
//       <App /> // Now App has access to context
//     </Provider>
//   )
// }

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