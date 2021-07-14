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
    const renderParks = filterParks.map((park, index) => <li style={{ listStyleType: "none" }}><Link  style={{ color: "darkgreen" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)
    // <div key={index}>{park.fullName}</div>)
    


    return (
      <>
      {/* <div className="container-fluid" style={{backgroundColor:"gray"}}></div> */}
  <div className="jumbotron jumbotron-fluid">
    <div className="row">
      <div className="col-sm text-left pl-5">
          <img src={logo} alt="Logo" />
      </div>
      <div className="col-sm" >
          &nbsp;
      </div>
      <div variant="primary" className="col-sm" style={{paddingLeft: '520px', paddingTop: '15px'}}>
      <Button variant="secondary" style={{paddingRight: '10px'}}>Sign Up</Button> <Button>Login</Button>
      </div>
    </div>
  </div>
  
  <div className="container-fluid border text-center align-middle" style={{height: "400px", backgroundColor: '#E0FCE6', backgroundImage:`url(${Hero})`}}> 
    <h1 className="mb-4 font-weight-bold text-white" style={{marginTop: '12%', fontSize: "48px"}}>Find your next National Park</h1>
  
    <form action="/results">
                      <h1>Search for Parks in your State!</h1>
                      <input maxLength="2" style={{width: '90px'}} type="text" id="search" placeholder="Ex: FL, CA" onChange={e => setSearch(e.target.value)}/>
                      <br/>
                      <br/>
                      {/* <input type="submit" onSubmit={e => props.setResults(renderParks)} /> */}
  
                  </form>
                  <div className="textboxSearch">
  
                      <ul>
                          {renderParks}
                      </ul>
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
  
  <footer style={{height: '75px', paddingTop: '15px'}} className="container text-center align-middle">
    <div>c 2021 - FOOTER INFO</div>
  </footer>
      </>
    );
  }
    

export default HomeLayout