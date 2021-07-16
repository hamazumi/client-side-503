import {Nav, Navbar} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import logoMain from '../resources/images/Logo.png'
import { WiDaySunny, WiStrongWind } from 'weather-icons-react';
import { useState, useEffect } from 'react'
import React, { Component } from 'react';
import '../App.css'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export default function Navigation(props) {
    
  // // weather function, include city, weather state, icon, degrees F
  const [weather, setWeather] = useState({})
  const city = ['sitka', 'kalaupapa', 'jensen', 'patchogue']

  useEffect(() => {
    // const api ={
    //   key: "",
    //   base: "https://api.openweathermap.org/data/2.5"
    // }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city[1]}&units=imperial&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      // setQuery('');
      console.log(result);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

const Weather = () => {
  return(

  <div className="d-flex text-right justify-content-end text-white w-100 p-3">
  <div className="text-right mr-2" style={{fontSize: '.9rem'}}>
  {weather.name} weather:  

  {/* if (weather.weather != undefined){ */}
   {/* {weather.weather[0].description}  */}
  {/* } */}
  {/* <WiDaySunny size={24} color='#fff' />  */}
  {/* {Math.round(weather.main.temp)}&deg;F  */}
  {/* <WiStrongWind size={24} color='#fff' />  */}
  {/* {weather.wind.speed}mph */}
  </div>
</div>


)
}

    // ---------------------------- if the user is logged IN
    const loggedIn = (
    <>
      <Navbar bg="dark" variant="dark">    
        <Nav>
          <Nav.Link href="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Nav.Link>
          <Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/profile"><FaHeart/></Nav.Link><div style={{marginTop: '28px', paddingLeft: '20px', color: '#454e54'}}>|</div><Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/"><span onClick={props.handleLogout}>Logout</span></Nav.Link>
        </Nav>


<Weather />

        
      </Navbar>
    </>
    )
    // ---------------------------- if the user is logged OUT
    const loggedOut = (
    <>
      <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Nav.Link>
          <Nav.Link style={{marginTop: '20px', paddingLeft: '30px'}} href="/login">Log in</Nav.Link><span style={{marginTop: '28px', paddingLeft: '10px', color: '#454e54'}}>|</span><Nav.Link style={{marginTop: '20px', paddingLeft: '20px'}} href="/register">Register</Nav.Link>
        </Nav>


        <Weather />


      </Navbar>
    </>
    )

    return(
        <nav>

           {props.currentUser ? loggedIn : loggedOut}

        </nav>
    )
}