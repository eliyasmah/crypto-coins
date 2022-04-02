
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CoinDetails from './Components/CoinDetails/CoinDetails';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
