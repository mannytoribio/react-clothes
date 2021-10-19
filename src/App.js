import {
  BrowserRouter as Router,
  Switch,
  Route, 
  NavLink } from 'react-router-dom'
import Home from './components/home';
import Clothes from './components/clothes';
import Add from './components/add';
import './App.css'
import Navbar from './components/shared/Navbar';
import Coffee from './components/coffee'
import Login from './components/login';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/clothes' component={Clothes} />
      <Route path='/coffee' component={Coffee} />
      <Route path='/login' component={Login} />
      <Route path='/add' component={Add} />
      <Route path="/">
        <h1>404 - Page Not Found</h1>
      </Route>
    </Switch>
    </main>
    </Router>
  )
}

export default App;
