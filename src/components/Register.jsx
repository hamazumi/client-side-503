import { useState } from "react"
import axios from 'axios'
import jwt from "jsonwebtoken"
import { Redirect, Link } from "react-router-dom"
import Profile from "./Profile"
import {Form, Button, Container, Row, Col, Jumbotron} from 'react-bootstrap'





export default function Register(props) {
    // state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for the flash message from the server
    const [message, setMessage] = useState('')
    // function to handle form submission
    const handleSubmit = async e => {
        try{
            e.preventDefault()
            // make a request body
            const requestBody = {
                name: name,
                email: email,
                password: password
            }

            // post registration data to the server
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
            // take the token out of the response
            const { token } = response.data

            // set token in local storage
            localStorage.setItem('jwtToken', token)

            // decode the token
            const decoded = jwt.decode(token)
            
            // set the user in the app.js state
            props.setCurrentUser(decoded)



        } catch(err){
            // set message if error is 400
            if(err.response.status === 400) {
                setMessage(err.response.data.msg)
            } else{
                console.log(err)
            }
        }
        
        
        console.log('submit the form')
    }

    // redirect if the user if logged in
    if(props.currentUser) return <Redirect to='/profile' component={Profile} currentUser={props.currentUser} />
    return(
        <div>
             <Container className="mt-5">
           <Row>
               <Col md={{span: 7, offset: 3}}>
                   <Jumbotron>
                       <h3>Create your free account</h3>
                       <Form onSubmit={handleSubmit}>
                           <Form.Group>
                               <Form.Row>
                                   <Col>
                                   <Form.Control
                                   id="name-input"
                                   type="text"
                                   placeholder="Name"
                                   onChange={e => setName(e.target.value)}
                                   value={name}></Form.Control>
                                   </Col>
                               </Form.Row>
                               <Form.Row>
                                   <Col>
                                   <Form.Control
                                   id="email-input"
                                   type="email"
                                   placeholder="Email"
                                   onChange={e => setEmail(e.target.value)}
                                   value={email}></Form.Control>
                                   </Col>
                               </Form.Row>
                               <Form.Row>
                                   <Col>
                                   <Form.Control
                                   id="password-input"
                                   type="password"
                                   placeholder="Password"
                                   onChange={e => setPassword(e.target.value)}
                                   value={password}></Form.Control>
                                   </Col>
                               </Form.Row>
                               <Button type='submit' className='mt-5 mb-3'>Sign up</Button>
                               <Row>
                                   <Col>
                                   <p>Already have an account? <Link to='/login'>Log in</Link></p>
                                   </Col>
                               </Row>
                               

                           </Form.Group>
                       </Form>

                   </Jumbotron>
               </Col>
           </Row>
       </Container>
            {/* <h3>Regristration form: </h3>

            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor='name-input'>Name:</label>

                <input 
                id="name-input"
                type="text"
                placeholder="enter your name user..."
                onChange={e => setName(e.target.value)}
                value={name}
                />
                <label htmlFor='email-input'> Email:</label>

                <input 
                id="email-input"
                type="email"
                placeholder="enter your email user..."
                onChange={e => setEmail(e.target.value)}
                value={email}
                />
                <label htmlFor='password-input'>Password:</label>

                <input 
                id="password-input"
                type="password"
                placeholder="enter your password user..."
                onChange={e => setPassword(e.target.value)}
                value={password}
                />

                <input 
                    type='submit'
                    value='make new account'
                />
            </form> */}

        </div>
    )
}