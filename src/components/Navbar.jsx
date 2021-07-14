import {Link} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import {AiFillHome} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'


export default function Navigation(props) {
    

    // if the user is logged in 
    const loggedIn = (
        <>
         <Navbar bg="dark" variant="dark">
    
    <Nav className="mr-auto justify-content-end">
      <Nav.Link href="/"><AiFillHome /></Nav.Link>
      <Nav.Link href="/profile"><FaHeart/></Nav.Link>
      <Nav.Link href="/"><span onClick={props.handleLogout}>Logout</span></Nav.Link>
    </Nav>
  </Navbar>
        {/* <Link to='/profile'>Profile</Link>
        <Link to='/'><span onClick={props.handleLogout}>Logout</span></Link> */}
        </>
    )


    // if the user is logged out
    const loggedOut= (

    
        <>
        <Navbar bg="dark" variant="dark" >
    
    <Nav className="mr-auto justify-content-end">
      <Nav.Link href="/"><AiFillHome /></Nav.Link>
      <Nav.Link href="/login">Log in</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  </Navbar>
        {/* <Link to ="/login">Login!</Link>
        <Link to ="/register">Register</Link> */}
        </>
    )



    return(
        <nav>
            {/* <Link to='/'>Home</Link> */}

           {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}