
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import HomeButton from './components/HomeButton';
function App() {
  return (
    // remove align items center after testing

<Router>

<Link to="/"><HomeButton /></Link>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/Home" element={<Home />}  />

<Route path="/Details/:id" element={<Details />}  />

</Routes>


 </Router>
  );
}

export default App;
