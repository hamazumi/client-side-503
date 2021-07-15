import React from 'react'
import {Button, Dropdown, Card} from 'react-bootstrap'
// import bg1 from '../resources/images/nature_placeholder1.jpg' 
// import logo from '../resources/images/Logo.png'
import Hero from '../resources/images/Hero.png'
// import np1 from '../resources/images/np1.png'
// import np2 from '../resources/images/np2.png'
// import np3 from '../resources/images/np3.png'
// import np4 from '../resources/images/np4.png'
// import np5 from '../resources/images/np5.png'
import kb2 from '../resources/images/Kachemak_Bay_2.png'
import iv1 from '../resources/images/Iao_Valley_1.png'
import ec1 from '../resources/images/Eldorado_Canyon_1.png'
import nf1 from '../resources/images/Niagra_Falls_1.png'
import hiking from '../resources/images/Hiking_1.png'
import fishing from '../resources/images/Fishing_1.png'
import mountainBiking from '../resources/images/Mountain_Biking_1.png'
import birdWatching from '../resources/images/Bird_Watching_1.png'
import backpacking from '../resources/images/Backpacking_1.png'
import axios from 'axios'
import { useEffect, useState } from 'react';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import {Link} from 'react-router-dom'
import '../App.css'

let API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

function HomeLayout(props) {

    const [search, setSearch] = useState("")
    
    const filterParks = props.results.filter((park) => {
        return park.states.toString().toLowerCase().includes(search.toString().toLowerCase()) 
    })
    
    const renderParks = filterParks.map((park, index) => 
      <>
      {/* <hr/>Park code: {park.parkCode} */}
      <li className="parkList text-decoration-none" style={{ listStyleType: "none" }}>
        <Link style={{ color: "white", fontWeight: "bold" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link>
      </li>
      </>
    )

    return (
      <>
  

  <div className="container-fluid border text-center align-center" style={{height: "400px", backgroundColor: '#E0FCE6', backgroundImage:`url(${Hero})`, backgroundSize: 'cover'}}> 

    <h1 className="mb-0 font-weight-bold text-white" style={{marginTop: '80px', fontSize: "48px", textShadow: '2px 2px 3px #7a6c4e' }}>Find your next National Park</h1>

  <p className="text-white font-weight-bold" style={{textShadow: '2px 2px 3px #7a6c4e'}}>Enter your state code </p>
  


<form className="mx-auto form-group" style={{height: '33px'}} action="/results">
    <input className="text-uppercase" maxLength="2" style={{width: '90px', border: '0', borderRadius: '2px', background: 'white', boxShadow: '3px 3px 3px #7a6c4e'}} type="text" id="search" placeholder=" Ex: FL, CA" onChange={e => setSearch(e.target.value)}/>
  </form>


<div className="d-flex align-items-center text-justify">
  <div className="textboxSearch" style={{width: '500px', height: '173px', margin: '0 auto', border: '0'}}>
    <ul className="text-decoration-none" style={{ background: 'rgba(169, 143, 84, .8)', textShadow: '1px 1px 1px #7a6c4e' }}>
    {renderParks}
    </ul>

  </div>
</div>



</div>
  <div className="container">
    <div className="row">
      <h3 className="pt-2 text-secondary">Popular Parks</h3>
    </div>
    <div className="row">
      {/* Card */}
      <Card style={{ width: '25%' }}>
      <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray", overflow: 'hidden'}} src={kb2} />
      <Card.Body>
      <p>
      Sitka National Historical Park
      <span className="font-weight-light font-italic"> &mdash; Sitka, AK</span> 
      </p>
    {/* <Button variant="primary" size="sm" href="park/sitk">Visit Sitka National Historical Park</Button> */}
    <Button variant="primary" size="sm" href="park/sitk">Visit Sitka National Historical Park</Button>
    </Card.Body>
    </Card>
    {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
    <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={iv1} />
      <Card.Body>
        <p>
        Kalaupapa Historical Park<span className="font-weight-light font-italic"> &mdash; Kalaupapa, Hawaii</span> 
        </p>
        <Button variant="primary" size="sm">Visit Kalaupapa Historical Park</Button>
      </Card.Body>
    </Card>
    {/* Card end */}
    {/* Card */}
      <Card style={{ width: '25%' }}>
        <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={ec1} />
        <Card.Body className="mb-2">
        <p>
        Dinosaur National Monument<span className="font-weight-light font-italic"> &mdash; Jensen, UT</span> 
        </p>
        <Button variant="primary" size="sm">Visit Eldorado Canyon State Park</Button>
      </Card.Body>
    </Card>
    {/* Card end */}
    
    {/* Card */}
    <Card style={{ width: '25%' }}>
      <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={nf1} />
      <Card.Body>
        <p>
        Fire Island National Seashore<span className="font-weight-light font-italic"> &mdash; Patchogue, NY</span> 
        </p>
        <Button variant="primary" size="sm">Visit Fire Island National Seashore</Button>
      </Card.Body>
    </Card>
    {/* Card end */}
    </div>
  </div>
  
  <div className="container mt-10" style={{marginTop: '25px'}}>
  <div className="row">
  <div className="col-sm text-center">
  <img src={hiking} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Hiking</p>
  </div>
  <div className="col-sm text-center">
  <img src={fishing} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Fishing</p>
  </div>
  <div className="col-sm text-center">
  <img src={mountainBiking} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Mountain Biking</p>
  </div>
  <div className="col-sm text-center">
  <img src={birdWatching} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Bird Watching</p>
  </div>
  <div className="col-sm text-center">
  <img src={backpacking} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Backpacking</p>
  </div>
  </div>
  <div className="bg-light small text-right text-muted" style={{height: '50px', padding: '10px'}}>&copy; 2021 - Park Hopper</div>
  </div>

      </>
    );
  }
    

export default HomeLayout
