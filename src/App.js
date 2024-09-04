import './App.css';
import Cubes from './components/Cubes';
import Projects from './components/Projects';
import About from './components/About';
import Dsacco from './components/Dsacco';
import { Routes,Route } from 'react-router';
import Menu from './components/Menu'
import Contact from './components/Contact';
import Dschool from './components/Dschool';
function App() {
  return (
    <div className="App">
     <> 
     <Menu/>
     <Routes>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Cubes/>}/>
      <Route path="/dschool" element={<Dschool/>}/>

      <Route path="/contact" element={<Contact/>}/>
            <Route path="/dsacco" element={<Dsacco/>}/>




   
      </Routes>

     </>
    </div>
  );
}

export default App;
