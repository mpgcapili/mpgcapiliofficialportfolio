import './App.css';
import { Routes, Route} from 'react-router-dom';
import Works from './pages/Works';
import AboutMe from './pages/AboutMe';
import NavBar from './components/NavBar';
import AdminUi from './pages/featuredWorks/AdminUi';
import AiGuardrails from './pages/featuredWorks/AiGuardrails';
import DesignImport from './pages/featuredWorks/DesignImport';
import QuickStart from './pages/featuredWorks/QuickStart';
import NotFound from './pages/NotFound';
import BoltFood from './pages/personalProjects/BoltFood';
import Crypto from './pages/personalProjects/Crypto';

const App = () => {
  return (
    <>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Works/>}/>
        <Route path="/works" element={<Works/>} />
        <Route path="/aboutme" element={<AboutMe/>}/>
        {/* <Route path="/works/:typeofwork/:id" element={<AdminUi/>}/>
        <Route path="/works/featured/aiguardrails" element={<AiGuardrails/>}/>
        <Route path="/works/featured/designimport" element={<DesignImport/>}/>
        <Route path="/works/featured/quickstart" element={<QuickStart/>}/>
        <Route path="/works/personalwork/boltfood" element={<BoltFood/>}/>
        <Route path="/works/personalwork/crypto" element={<Crypto/>}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
