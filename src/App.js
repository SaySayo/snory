
import './App.css';
import Home from './Home';
import Login from './Login.js'
import Landing from './Landing'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
