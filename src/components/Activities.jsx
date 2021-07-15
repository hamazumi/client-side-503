
import axios from 'axios' 
import {Link} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect, 
    useParams
  } from 'react-router-dom'
  
  import {
    useState,
    useEffect
  } from 'react'

  import {Container, Row, Col} from 'react-bootstrap'

  let API_KEY = process.env.REACT_APP_API_KEY




export default function Activities(props) {

    const [active, setActive]=  useState("")
    const [actSearch, setActSearch]=  useState("")
    
  

// ---------------------------------------------------
    let allAllActivities = []
    props.results.forEach(park => {
        park.activities.forEach((activity) => allAllActivities.push(activity.name))
    })
    let allActivities = new Set(allAllActivities)
    let activityArray = [...allActivities]
    

{/* <li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> <Link style={{ color: "black", fontWeight: "bold" }}  to={`/activities`}>{activity.name}</Link></li>) */}

    

// ---------------------------------------------------
// FILTER PARKS BY ACTIVITY:

        let filteredActivities = []

    
        props.results.forEach(park => {
            let y = (park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(actSearch.toString().toLowerCase())))
            
            if(y.length != 0){
                filteredActivities.push(<li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> <Link style={{ color: "black", fontWeight: "bold" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)
                
                
            }
            
        })
// ---------------------------------------------------
// SEARCH ACTIVITIES: 


let searchedActivities = activityArray.filter((activity) => activity.toString().toLowerCase().includes(actSearch.toString().toLowerCase()))
            

// ---------------------------------------------------
// RENDER ALL ACTIVITES AS LINKS
        let renderParks
        if(activityArray != []){

            renderParks = searchedActivities.map((activity, index) => 
         
          
          <li className="parkList text-decoration-none" style={{ listStyleType: "none" }}> 
          <Link style={{ color: "black", fontWeight: "bold" }} to={`/activities/${activity}`}>{activity}</Link>
          </li>
          

        

        
        )
    }
   

// ------------------------------------------------------------


    //filter by activity, have a form option that adds it to the 

    //clicked link should arrive here filtered

    //upon filter, change the url to activites/hiking activities/fishing?
    
    
    
    
    return(
        <div>
            Search Activities Page:
            
                <form action="/activities" >
                    <h1></h1>
                    <input type="text" id="search" onChange={e => setActSearch(e.target.value)}/>
                    <br/>
                    <br/>
                    {/* <input type="submit" onClick={e => props.setResults(handleSearch)} /> */}

                </form>
                <div >

                    <ul style={{backgroundColor: "white"}} >
                        {renderParks}
                      
                    </ul>
                </div>
        </div>

        
    )
}