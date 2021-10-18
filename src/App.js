import {
  BrowserRouter as Router,
  Switch,
  Route, 
  NavLink } from 'react-router-dom'
import Home from './components/home';
import Clothes from './components/clothes';
import Add from './components/add';
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <nav>
         <NavLink exact to="/">Home</NavLink> 
         <NavLink exact to="/clothes">Clothes</NavLink> 
         <NavLink exact to="/add">Add</NavLink> 
        </nav>
      </header>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/clothes' component={Clothes} />
      <Route path='/add' component={Add} />
      <Route path="/">
        <h1>404 - Page Not Found</h1>
      </Route>
    </Switch>
    </Router>
  )
}

export default App;
