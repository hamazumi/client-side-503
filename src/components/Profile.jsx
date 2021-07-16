import { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import Login from "./Login"
import '../App.css'
// import {Button, Dropdown, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Profile(props) {

    // state is information from server
    const[message, setMessage] = useState([])
   

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                // get the jwt from local storage
                const token = localStorage.getItem('jwtToken')

                // make up the auth headers
                const authHeaders = {
                    Authorization: token
                }

                // hit the auth locked endpoint
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                
                // setMessage(response.data.myFavs)
                const finalMessage = response.data.myFavs.map((favs) => 
                    <p>
                        {favs.title}
                    </p>
                )

                setMessage(finalMessage)
                
            } catch (err) {
                console.log(err)
                // log user out if error
                props.handleLogout()
            }
        }
        getPrivateMessage()

    }, [props])

    if(!props.currentUser) return <Redirect to='/login' component= {Login} currentUser={props.currentUser} />

    return(
        <div className="container-fluid border text-center align-center">
            <div className="row border">
                 <h4 className="fs-1">Greetings, {props.currentUser.name}!</h4>
            </div>
            <div className="row border">
                <h5> Your email is: {props.currentUser.email}</h5>
            </div>   
            <div className="row border"> 
            {props.currentUser.name}'s Favorite National Parks
            </div>
            <ul className="border list-unstyled">
                <li className="list-unstyled border-danger">
                        {message}

                        <br/>

                </li>
            </ul>

        </div>
    )
}