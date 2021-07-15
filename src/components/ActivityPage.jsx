
import axios from 'axios' 

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect, 
    useParams,
    Link
  } from 'react-router-dom'
  
  import {
    useState,
    useEffect
  } from 'react'




export default function ActivityPage(props) {
    
    const {id} = useParams()
    console.log(id)

    // FILTER PARKS BY ACTIVITY:

    let filteredActivities = []

    
    props.results.forEach(park => {
        let y = (park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(id.toString().toLowerCase())))
        console.log(y)
        if(y.length != 0){
            filteredActivities.push(<li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> <Link style={{ color: "black", fontWeight: "bold" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)
            
            
        }
        
    })








    return(
        <div>
            <a href="/Activities">All Activities</a>
            <h1>{id}</h1>
            {filteredActivities}

            
        </div>
    )
}