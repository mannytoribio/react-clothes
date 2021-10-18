import { NavLink } from "react-router-dom";
import './App.css'

export default function Navbar() {
  return (
    <nav>
    <NavLink exact to="/">Home</NavLink> 
    <NavLink exact to="/clothes">Clothes</NavLink> 
    <NavLink exact to="/add">Add</NavLink> 
   </nav>
  )
}