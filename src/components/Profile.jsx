import { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import Login from "./Login"
import '../App.css'
// import {Button, Dropdown, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCommentsDollar } from "react-icons/fa"

let API_KEY = process.env.REACT_APP_API_KEY

export default function Profile(props) {

    // state is information from server
    const [message, setMessage] = useState([])
   console.log("😁",message)

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
                await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                .then((res) => {
                    console.log(res)
                    res.data.myFavs.map((fav) => {
                         axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${fav.title}&api_key=${API_KEY}`)
                        .then((val) => {
                            if(val.data.data[0] != undefined){
                                console.log(`😎`,[...message])
                                let newFav = [...message, {fullName: val.data.data[0].fullName, description: val.data.data[0].description}]
                                console.log(newFav)
                                setMessage(newFav)
                                // setMessage(message.push({fullName: val.data.data[0].fullName, description: val.data.data[0].description}))
                                
                            }
                        })
                    })
                })

                //     const parkFavsData = res.data.myFavs.map((favs) => {
                //         axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${favs.title}&api_key=${API_KEY}`)
                //         .then((res2) => {
                //             console.log(res2.data.data[0].fullName)
                //         }
                //         )
                //         // // console.log(info.data.data[0].fullName)
                //         // return {fullName: info.data.data[0].fullName,
                //         //     description: info.data.data[0].description}
                //     })
                
                    
                //     // // setMessage(response.data.myFavs)
                //     const finalMessage = parkFavsData.map((favs) => 
    
                    
                //         <p>
                             
                //             {favs.fullName}
                //             {favs.description}
                //         </p>
                //     )
                // })
                

            } catch (err) {
                console.log(err)
                // log user out if error
                props.handleLogout()
            }
        }
        getPrivateMessage()

    }, [])

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
                        {message.map((lm) => {
                            return (
                                <div>

                                    <p>{lm.fullName}</p>
                                    <p>{lm.description}</p>
                                </div>
                                )
                            })}

                        <br/>

Add to favorites
Alerts & Conditions
Be prepared for hot, humid weather. The historic homes are not air conditioned. While the visitor center remains open all year, the historic homes are closed from November 1 through April 30.

                </li>
            </ul>

        </div>
    )
}