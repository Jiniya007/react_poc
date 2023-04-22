import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Course from './Components/Course';
import Home from './Components/Home';
import Company from './Components/Company';
import Contact from './Components/Contact';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/'element={ <Home/>}/>
      <Route path='/about'element={ <About/>}/>
      <Route path='/courses'element={   <Course/>}/>
      <Route path='/company'element={  <Company/>}/>
      <Route path='/contact' element={<Contact/>}/>
  
    </Routes>
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
