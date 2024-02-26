import './App.css';
import Navbar from './NavbarComponent/navbar';
import Homepage from './HomePage/Homepage';
import StarsCanvas from './StarsBackground/StarBackground';
function App() {
  return (
    <div className="App">
      <StarsCanvas/>
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
