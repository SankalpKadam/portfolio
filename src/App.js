
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/Homepage';
import AboutMe from './DetailedAboutMe/AboutMe';
function App() {
  return (
    <Routes>

      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<AboutMe/>}/>
    </Routes>
  );
}

export default App;
