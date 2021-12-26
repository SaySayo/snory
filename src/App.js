import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import {Home} from './pages/Home';
import {Landing} from './pages/Landing';
import {Login} from './pages/Login';

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
