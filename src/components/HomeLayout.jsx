import React from 'react'
import {Button, Dropdown, Card} from 'react-bootstrap'
import bg1 from '../resources/images/nature_placeholder1.jpg' 
import logo from '../resources/images/Logo.png'
import Hero from '../resources/images/Hero.png'
import np1 from '../resources/images/np1.png'
import np2 from '../resources/images/np2.png'
import np3 from '../resources/images/np3.png'
import np4 from '../resources/images/np4.png'
import np5 from '../resources/images/np5.png'
import axios from 'axios'
import { useEffect, useState } from 'react';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import {Link} from 'react-router-dom'


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
      <li className="" style={{ listStyleType: "none" }}>
        <Link style={{ color: "white", fontWeight: "bold" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link>
      </li>
      </>
    )
    // <div key={index}>{park.fullName}</div>)
    
    return (
      <>
  

  <div className="container-fluid border text-center align-center" style={{height: "400px", backgroundColor: '#E0FCE6', backgroundImage:`url(${Hero})`}}> 

    <h1 className="mb-0 font-weight-bold text-white" style={{marginTop: '100px', fontSize: "48px", textShadow: '2px 2px 4px #726039' }}>Find your next National Park</h1>

  <p className="text-white font-weight-bold" style={{textShadow: '2px 2px 4px #726039'}}>Enter your state code </p>
  

<form className="mx-auto form-group" style={{height: '33px'}} action="/results">
    <input className="text-uppercase" maxLength="2" style={{width: '90px'}} type="text" id="search" placeholder="Ex: FL, CA" onChange={e => setSearch(e.target.value)}/>
  </form>


<div className="d-flex align-items-center text-justify">
  <div className="textboxSearch" style={{width: '500px', height: '150px', margin: '0 auto'}}>
    <ul style={{ background: 'rgba(169, 143, 84, .8)' }} >
    {renderParks}
    </ul>
  </div>
</div>



</div>
  
  <div className="container">
    <div className="row">
      <h3 className="pt-2 text-muted">Popular Parks</h3>
    </div>
    <div className="row">
      {/* Card */}
      <Card style={{ width: '25%' }}>
      <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={np4} />
      <Card.Body>
  
      <p>
      Kachemak Bay State Park
      <span className="font-weight-light font-italic"> &mdash; Homer, Alaska</span> 
      </p>
    <Button variant="primary">Visit</Button>
    </Card.Body>
    </Card>
    {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
    <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={np3} />
    <Card.Body>
  
      <p>
      Iao Valley State Park <span className="font-weight-light font-italic"> &mdash; Wailuku, Hawaii</span> 
      </p>
        <Button variant="primary">Visit</Button>
    </Card.Body>
    </Card>
    {/* Card end */}
    {/* Card */}
      <Card style={{ width: '25%' }}>
      <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={np1} />
      <Card.Body>
  
      <p>
      Eldorado Canyon State Park <span className="font-weight-light font-italic"> &mdash; Eldorado Springs, Colorado</span> 
      </p>
    <Button variant="primary">Visit</Button>
    </Card.Body>
    </Card>
    {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
    <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src={np2} />
    <Card.Body>
      <p>
      Niagara Falls State Park <span className="font-weight-light font-italic"> &mdash; Niagara Falls, New York</span> 
      </p>
    <Button variant="primary">Visit</Button>
    </Card.Body>
    </Card>
    {/* Card end */}
    </div>
  </div>
  
  <div className="container mt-10" style={{marginTop: '25px'}}>
  <div className="row">
  <div className="col-sm text-center">
  <img src={np5} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Hiking</p>
  </div>
  <div className="col-sm text-center">
  <img src={np4} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Fishing</p>
  </div>
  <div className="col-sm text-center">
  <img src={np3} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Mountain Biking</p>
  </div>
  <div className="col-sm text-center">
  <img src={np2} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Bird Watching</p>
  </div>
  <div className="col-sm text-center">
  <img src={np1} width="150" height="150" className="rounded-circle" />
  <p className="pt-3">Backpacking</p>
  </div>
  </div>
  </div>

      </>
    );
  }
    

export default HomeLayout
