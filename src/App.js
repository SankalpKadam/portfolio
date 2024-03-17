
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import StarsCanvas from './StarsBackground';
function App() {
  return (
    <Routes>

      <Route path='/' element={<Homepage/>}/>
    </Routes>
  );
}

export default App;
