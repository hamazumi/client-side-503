import { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import Login from "./Login"
import '../App.css'
import {Button, Dropdown, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import kb2 from '../resources/images/Kachemak_Bay_2.png'


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
                <>
                    <div className="d-flex flex-row align-items-start justify-content-start border">
                        <img src={kb2} height="200" width="400" alt="Visit parknameHere"/>
                           <h3>Sitka National Park</h3>
                        </div>
                        <div>
                     
                        </div>

                    <div className="">
                    <Button className="btn btn-primary btn-sm">Remove This Park From Your Favorites</Button> <Button className="btn btn-primary btn-sm">Go To This Park's Main Page</Button> 
                    </div>
                    </>
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


        <div className="container text-center mt-5 align-center" >
            <div style={{display: 'grid', placeItems: 'center'}}>
                 <h1 className="fs-1 text-center fs-1 fw-bold">Greetings, {props.currentUser.name}!</h1>
            </div>
            <div style={{display: 'grid', placeItems: 'center'}} className="row">
                <p> Your email is: <span style={{fontStyle: 'italic', color: 'gray'}}>{props.currentUser.email}</span></p>
            </div>   
            <div style={{display: 'grid', placeItems: 'center'}} className="row mb-3"> 
            <h2>{props.currentUser.name}'s Favorite National Parks:</h2>
            </div>
            <ul className="border list-unstyled">
                <li className="list-unstyled border-danger">
                        {message}

                </li>
            </ul>
        </div>
    )
}