import React from 'react'
import {Button, Dropdown, Card} from 'react-bootstrap'
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
    

    const stateName="Kentucky"
  
    return (
      <>
  
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
  
    <div className="container border">
    <div className="row border">
      <h3>Popular parks: </h3>
    </div>
    <div className="row border">
      {/* Card */}
  <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
    </div>
    </div>
  
  <div className="container border mt-10" style={{marginTop: '15px'}}>
    <div className="row">
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Hiking</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Fishing</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Mountain Biking</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Bird Watching</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Backpacking</p>
    </div>
    </div>
  </div>
  
  <footer style={{height: '75px'}} className="container border text-center align-middle">
    <div>c 2021 - FOOTER INFO</div>
  </footer>
  
      </>
    );
  }

export default HomeLayout
