import './App.css';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import StarsCanvas from './StarsBackground';

function App() {
  return (
    <div className="App h-full bg-[url('./LooperGroup2.png')] bg-no-repeat">
      <StarsCanvas/>
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
