import {Nav, Navbar} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import logoMain from '../resources/images/Logo.png'
import { WiDaySunny, WiStrongWind } from 'weather-icons-react';
import { useState, useEffect } from 'react'
import React, { Component } from 'react';
import '../App.css'
import {Link, useHistory} from 'react-router-dom'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export default function Navigation(props) {
    
  // // weather function, include city, weather state, icon, degrees F
  const [weather, setWeather] = useState(null)

  const city = ['sitka', 'kalaupapa', 'jensen', 'patchogue']

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city[3]}&units=imperial&APPID=${API_KEY}`)
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
  console.log(weather)
  return(

    <div className="d-flex text-right justify-content-end w-100 p-3">
      <div className="text-right mr-2" style={{fontSize: '.9rem', color: '#ccc'}}>
        
        {weather.name} weather: &nbsp;
        {weather.weather[0].description}  
        <WiDaySunny size={24} color='#ccc' /> 
        {Math.round(weather.main.temp)}&deg;F &nbsp;
        <WiStrongWind size={24} color='#ccc' />
        {weather.wind.speed}mph
      </div>
    </div>

  )
}

    // ---------------------------- if the user is logged IN
    const loggedIn = (
    <>
      <Navbar bg="dark" variant="dark">    
        <Nav>
          <Link className="nav-link" to="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Link>
          <Link className="nav-link" style={{marginTop: '20px', paddingLeft: '30px'}} to="/profile"><FaHeart/></Link><div style={{marginTop: '28px', paddingLeft: '20px', color: '#454e54'}}>|</div><Link className="nav-link" style={{marginTop: '20px', paddingLeft: '30px'}} to="/"><span onClick={props.handleLogout}>Logout</span></Link>
        </Nav>
        {weather ? <Weather/> : ''}
      </Navbar>
    </>
    )
    // ---------------------------- if the user is logged OUT
    const loggedOut = (
    <>
      <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto justify-content-end">
          <Link className="nav-link" to="/" style={{borderRight: '3px solid #454e56', paddingRight: '30px'}}><img src={logoMain} /></Link>
          <Link className="nav-link" style={{marginTop: '20px', paddingLeft: '30px', width: '95px'}} to="/login">Log in</Link><span style={{marginTop: '28px', paddingLeft: '10px', color: '#454e54'}}>|</span><Link className="nav-link" style={{marginTop: '20px', paddingLeft: '20px'}} to="/register">Register</Link>
         
        </Nav>

        {weather ? <Weather/> : ''}

      </Navbar>
    </>
    )

    return(
        <nav>

           {props.currentUser ? loggedIn : loggedOut}

        </nav>
    )
}