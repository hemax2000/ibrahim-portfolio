import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />} >
        <Route index element={<Home />}/>
        <Route path={"/contact"} element={<Contact />}/>
        
      </Route>
      <Route path={"/projects"} element={<Projects />}/>
    </Routes>
    
    </>
  );
}

export default App;
