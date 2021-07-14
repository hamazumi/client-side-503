import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect,
    Link
  } from 'react-router-dom'
import Profile from './Profile'

import LoginImage from './login.jpg'

import {Form, Button, Container, Row, Col, Jumbotron} from 'react-bootstrap'

// var sectionStyle = {
//     backgroundImage: `url(${LoginImage})`
// }


export default function Login(props) {

    // state for the controlled form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash message from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try{
        e.preventDefault()
        console.log('do axios call')
        // post to back end with axios
        const requestBody = {
            email: email,
            password: password
        }
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)
        
        console.log(response.data, '🎈🎈🎈🎈🎈🎈🎈🎈')
        // destructure the response
        const { token } = response.data 
        console.log(token)
        // save response to local storage
        localStorage.setItem('jwtToken', token)

        // decode the jwt token before putting it in state
        const decoded = jwt.decode(token)


        // set the user in app.js's state
        props.setCurrentUser(decoded) 

        } catch(err){
            if(err.response.status === 400){
                setMessage(err.response.data.msg)
            }else{

                console.dir(err)
            }

        }
    }
    console.log('the current user is: ', props.currentUser)
    if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={props.currentUser}/>


    return(
        <div>
       <Container className="mt-5">
           <Row>
               <Col md={{span: 7, offset: 3}}>
                   <Jumbotron>
                       <h3>Log In</h3>
                       <Form onSubmit={handleSubmit}>
                           <Form.Group>
                               <Form.Row>
                                   <Col>
                                   <Form.Control
                                   id='email-input'
                                   type='email'
                                   onChange={e => setEmail(e.target.value)}
                                   value={email} 
                                   placeholder="Email"></Form.Control>
                                   </Col>
                               </Form.Row>
                               <Form.Row>
                                   <Col>
                                   <Form.Control
                                   id='password-input'
                                   type='password'
                                   onChange={e => setPassword(e.target.value)}
                                   value={password} 
                                   placeholder="Password"></Form.Control>
                                   </Col>
                               </Form.Row>
                               <Button type='submit' className='mt-5 mb-3'>Log In</Button>
                               <Row>
                                   <Col>
                                   <p>Dont have an account? <Link to='/register'>Sign Up</Link></p>
                                   </Col>
                               </Row>
                               

                           </Form.Group>
                       </Form>

                   </Jumbotron>
               </Col>
           </Row>
       </Container>

            

            {/* <h3>Log in to your account</h3>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'email-input'}>Email: </label>
                <input
                    id='email-input'
                    type='email'
                    placeholder="enter your email here"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                    <label htmlFor={'password-input'}>Password: </label>
                    <input 
                    id='password-input'
                    type='password'
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                    <input
                    type='Submit'
                    value='Log in'
                    />
            </form> */}
        </div>
    )
}