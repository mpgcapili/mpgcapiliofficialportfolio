import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Works from './pages/Works';
import AboutMe from './pages/AboutMe';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Works/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Routes>
    </>
  )
}

export default App
