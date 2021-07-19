import React from 'react'
import {Button, Dropdown, Card} from 'react-bootstrap'
import Hero from '../resources/images/Hero.png'
import kb2 from '../resources/images/Kachemak_Bay_2.png'
import iv1 from '../resources/images/Iao_Valley_1.png'
import ec1 from '../resources/images/Eldorado_Canyon_1.png'
import nf1 from '../resources/images/Niagra_Falls_1.png'
import hiking from '../resources/images/Hiking_1.png'
import fishing from '../resources/images/Fishing_1.png'
import mountainBiking from '../resources/images/Mountain_Biking_1.png'
import birdWatching from '../resources/images/Bird_Watching_1.png'
import backpacking from '../resources/images/Backpacking_1.png'
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import '../App.css'

function HomeLayout(props) {

  const history = useHistory()

  function handleClick(path) {
    history.push(path)
  }

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
  
  <div className="container-fluid border border-dark text-center align-center" style={{height: "400px", backgroundColor: '#80745b', backgroundImage:`url(${Hero})`, backgroundSize: 'cover'}}> 

    <h1 className="mb-0 font-weight-bold text-white" style={{marginTop: '80px', fontSize: "48px", textShadow: '0 0 4px #7a6c4e60' }}>Find your next National Park</h1>

  <p className="text-white font-weight-bold" style={{textShadow: '2px 2px 3px #7a6c4e'}}>Enter your state code </p>
  


<form className="mx-auto form-group" style={{height: '33px'}} action="/results">
    <input className="text-uppercase" maxLength="2" style={{width: '90px', border: '0', borderRadius: '2px', background: 'white', boxShadow: '3px 3px 3px #7a6c4e'}} type="text" id="search" placeholder=" Ex: FL, CA" onChange={e => setSearch(e.target.value)}/>
  </form>


<div className="d-flex align-items-center text-justify">
  <div className="textboxSearch" style={{width: '500px', height: '173px', margin: '0 auto', border: '0'}}>
    <ul className="text-decoration-none" style={{ background: 'rgba(169, 143, 84, .8)', textShadow: '1px 1px 1px #7a6c4e'}}>
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

          <Link to='park/sitk'>
              <Button variant="primary" size="sm"  >Visit Sitka National Historical Park</Button>
           </Link>
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

        <Link to='park/kala'> 
          <Button variant="primary" size="sm"  >Visit Kalaupapa Historical Park</Button>
          </Link>
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

      <Link to='park/dino'>
        <Button variant="primary" size="sm">Visit Dinosaur National Monument</Button>
        </Link>
      </Card.Body>
    </Card>
    {/* Card end */}
    
    {/* Card */}
    <Card style={{ width: '25%' }}>
      <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={nf1} />
      <Card.Body>
        <p>
          Fire Island National<span className="font-weight-light font-italic"> &mdash; Patchogue, NY</span> 
        </p>

      <Link to='park/fiis'>
        <Button variant="primary" size="sm" >Visit Fire Island National Seashore</Button>
        </Link>
      </Card.Body>
    </Card>
    {/* Card end */}
    </div>
  </div>
  
  <div className="container">
  <div className="row mt-4">
  <div className="col-sm text-center link-primary">
    <Link to="/activities/Hiking">
    <img src={hiking} width="150" height="150" className="rounded-circle" />
    <p className="pt-3">Hiking</p> 
    </Link>
  </div>
  <div className="col-sm text-center">
    <Link to="/activities/Fishing">
    <img src={fishing} width="150" height="150" className="rounded-circle" />
    <p className="pt-3">Fishing</p>
    </Link>
  </div>
  <div className="col-sm text-center">
    <Link className="activities" to="/activities/Mountain%20Biking">
    <img src={mountainBiking} width="150" height="150" className="rounded-circle" />
    <p className="pt-3">Mountain Biking</p>
    </Link>
  </div>
  <div className="col-sm text-center">
    <Link to="/activities/Birdwatching">
    <img src={birdWatching} width="150" height="150" className="rounded-circle" />
    <p className="pt-3">Bird Watching</p>
    </Link>
  </div>
  <div className="col-sm text-center">
  <Link to="/activities/Backcountry%20Hiking">
    <img src={backpacking} width="150" height="150" className="rounded-circle" />
    <p className="pt-3">Backcountry Hiking</p>
    </Link>
  </div>
  </div>
  <div className="bg-light small text-right text-muted" style={{height: '50px', padding: '10px'}}>&copy; 2021 - Park Hopper</div>
  </div>

      </>
    )
  }
    

export default HomeLayout
