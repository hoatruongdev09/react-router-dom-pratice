import { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'

import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'
import Dashboard from './Pages/Dashboard'

function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <BrowserRouter basename="home">
        <div className="App">
          <Header />
          <button onClick={e => setLogin(!login)}>{login ? "Log out" : "Login"}</button>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/profile'>
              <Profile login={login} />
            </Route>
            <Route path='/post/:id' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
