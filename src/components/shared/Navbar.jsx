import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
    <NavLink exact to="/">Home</NavLink> 
    <NavLink exact to="/clothes">Clothes</NavLink> 
    <NavLink exact to="/coffee">Coffee</NavLink> 
    {/* <NavLink exact to="/add">Add</NavLink>  */}
    <NavLink exact to="/login">Login</NavLink> 
   </nav>
  )
}