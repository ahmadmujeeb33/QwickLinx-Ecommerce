import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Categories } from './Components/Categories/Categories'
import { SpecificCategory } from './Components/SpecificCategory/SpecificCategory';
import { Products } from './Components/Products/Products';
import { Search } from './Components/Search/Search'
import { Cart } from './Components/Cart/Cart';


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
          <Route path="/categories/:id" element={<SpecificCategory />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    );
}

export default App;
