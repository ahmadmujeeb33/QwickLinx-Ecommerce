
import { Link } from "react-router-dom"
import './header.css';
import { IoPerson } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

import Auth from '../../utils/auth';


export const Header = () =>{
  return (
    <div className="header-container">
      {
        Auth.loggedIn() ? 
          <header>
            <button class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FaLayerGroup />
                <Link to ="/categories"  className="items">Categories</Link>
            </button>      
            <button class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <IoPerson />
                <Link to ="/logout"  className="items">Logout</Link>
            </button>
            
          </header> : 
         <header>

            <button class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <IoPerson />
                <Link to ="/login"  className="items">Login</Link>
            </button>
            <button class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FaAddressCard />
                <Link to ="/register"  className="items">Register</Link>
            </button>
          </header>       
      }
    </div>
  )
}