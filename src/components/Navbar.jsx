import {Nav, Navbar} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import logoMain from '../resources/images/Logo.png'
import { WiDaySunny } from 'weather-icons-react';

export default function Navigation(props) {
    
    // ---------------------------- if the user is logged out
    const loggedIn = (
    <>
      <Navbar bg="dark" variant="dark">    
        <Nav>
          <Nav.Link href="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Nav.Link>
          <Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/profile"><FaHeart/></Nav.Link><div style={{marginTop: '28px', paddingLeft: '20px', color: '#454e54'}}>|</div><Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/"><span onClick={props.handleLogout}>Logout</span></Nav.Link>
        </Nav>
        {/* Weather render, right side */}
        <div className="d-flex text-right justify-content-end text-white w-100 p-3">
          <div className="text-right mr-2">Patchogue Weather: </div>
          <div className="text-right mr-2">Sunny</div>
          <div className="text-right mr-2"><WiDaySunny size={24} color='#fff' /></div>
          <div className="text-right mr-2">78&deg;F</div>
        </div>
      </Navbar>
    </>
    )

    // ---------------------------- if the user is logged out
    const loggedOut = (
    <>
      <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Nav.Link>
          <Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/login">Log in</Nav.Link><span style={{marginTop: '28px', paddingLeft: '10px', color: '#454e54'}}>|</span><Nav.Link style={{marginTop: '20px', paddingLeft: '20px'}} href="/register">Register</Nav.Link>
        </Nav>
      </Navbar>
    </>
    )

    return(
        <nav>

           {props.currentUser ? loggedIn : loggedOut}
           
        </nav>
    )
}