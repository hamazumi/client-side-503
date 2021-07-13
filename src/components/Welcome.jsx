import axios from 'axios'
import { useEffect, useState } from 'react';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import {Link} from 'react-router-dom'

let API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
export default function Welcome() {


    const [search, setSearch] = useState("")
    const [parkData, setParkData] = useState([])
    
    useEffect(() => {
        axios.get(`https://developer.nps.gov/api/v1/parks?limit=600&api_key=${API_KEY}`)
        .then((response) => {
          setParkData(response.data.data)
          
          console.log("log",response.data.data)
        })
        .catch((err) => console.log(err))
      },[])

    
      
    const filterParks = parkData.filter((park) => {
        return park.states.toString().toLowerCase().includes(search.toString().toLowerCase()) 
    })
    const renderParks = filterParks.map((park, index) => <li style={{ listStyleType: "none" }}><Link  style={{ color: "darkgreen" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)
    // <div key={index}>{park.fullName}</div>)
    

    
    return(
        <div>
            <form>
                <h1>Search for Parks in your State!</h1>
                <input maxLength="2" style={{width: '90px'}} type="text" id="search" placeholder="Ex: FL, CA" onChange={e => setSearch(e.target.value)}/>
                <br />
                <br/>
                {/* <input type="submit" onSubmit={renderParks} /> */}

            </form>
            <div className="textboxSearch">

                <ul>
                    {renderParks}
                </ul>
            </div>
        </div>
        
    )
}