import './App.css';
import Cubes from './components/Cubes';
import Projects from './components/Projects';
import About from './components/About';
import { Routes,Route } from 'react-router';
function App() {
  return (
    <div className="App">
     <> 
     <Routes>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Cubes/>}/>



   
      </Routes>

     </>
    </div>
  );
}

export default App;
