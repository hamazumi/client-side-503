import './App.css';
import Navigation from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Profile from './components/Profile.jsx'
import Welcome from './components/Welcome.jsx'
import ParkResult from './components/ParkResult.jsx'
import Park from './components/Park.jsx'


import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from 'react-router-dom'

import {
  useState,
  useEffect
} from 'react'

import jwt from 'jsonwebtoken'

function App() {
  // state holds user data if the user is logged in
  const [currentUser, setCurrentUser] = useState(null)

  // if navigates away automatically log them in (if the jwt is valid)
  useEffect(() => {
    // get token from local storage
    const token = localStorage.getItem('jwtToken')
    // if check for token 
    if(token){
      setCurrentUser(jwt.decode(token))
    } else {
      setCurrentUser(null)
    }

    // else set user in state to be null
  }, [])

  // function to log the user out
  const handleLogout = () => {

    // delete the jwt that is is local storage:
    if(localStorage.getItem('jwtToken')){
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
    }
  }

  return (
    <Router>
      <header>
        <Navigation  currentUser={ currentUser } handleLogout={ handleLogout }/>
      </header>

      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            component={Welcome}
          />

          <Route 
            path="/register"
            render={ props => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser }/> }
          />

          <Route 
            path="/login"
            render={ props => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser }/> }
          />

          {/* eventually we will do a condintional render here */}
          <Route 
            path="/profile"
            render={ props => currentUser ? <Profile {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } handleLogout={handleLogout}/> : <Redirect to="/login"/> }
          />

          <Route 
            path="/results"
            render={ props => <ParkResult {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } handleLogout={handleLogout}/>}
          />

          <Route 
            path="/park"
            render={ props => <Park {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } handleLogout={handleLogout}/> }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;