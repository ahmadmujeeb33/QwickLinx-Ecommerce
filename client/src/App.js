import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Categories } from './Components/Categories/Categories'


import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Header />
      <div>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
    );
}

export default App;
