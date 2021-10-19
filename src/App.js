import { useState, createContext, useEffect } from 'react'
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

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const oldUser = JSON.parse(localStorage.getItem(user))
    setUser(oldUser)
  }, [])
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
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
      </ AuthContext.Provider>
    </Router>
  )
}

export default App;
