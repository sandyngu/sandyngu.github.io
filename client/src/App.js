import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} exact />
      </Routes>
    </div>
  );
}

export default App;
