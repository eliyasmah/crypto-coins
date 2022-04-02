
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './Components/Coins/Coins';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/homepage" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
      </Routes>
    </div>
  );
}

export default App;
