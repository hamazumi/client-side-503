
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
    
  
    // console.log(props.results)
    // const filterAll = props.results.filter((park) => {

    //     return park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(actSearch.toString().toLowerCase()))
    // })
// ---------------------------------------------------
    let allAllActivities = []
    props.results.forEach(park => {
        park.activities.forEach((activity) => allAllActivities.push(activity.name))
    })
    let allActivities = new Set(allAllActivities)
    console.log(allActivities)
    
{/* <li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> <Link style={{ color: "black", fontWeight: "bold" }}  to={`/activities`}>{activity.name}</Link></li>) */}



// ---------------------------------------------------
let filteredActivities = []
// const handleSearch = (e) => {
    // e.preventDefault()
        props.results.forEach(park => {
            let y = (park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(actSearch.toString().toLowerCase())))
            
            if(y.length != 0){
                filteredActivities.push(<li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> <Link style={{ color: "black", fontWeight: "bold" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)
                
                
            }
            
        })
        console.log(filteredActivities)
        const renderParks = allActivities.map((activity, index) => 
        <>
          {/* <hr/>Park code: {park.parkCode} */}
          
          <li  className="parkList text-decoration-none" style={{ listStyleType: "none" }}> 
          <Link style={{ color: "black", fontWeight: "bold" }}  to={`/activities`}>{activity.name}</Link>
          </li>
          
          </>
        )
        
        
        // <div key={index}>{park.fullName}</div>)
    // }


// ------------------------------------------------------------
    // console.log(filteredActivities)
     
    // console.log(filterAll)


   

    //filter by activity, have a form option that adds it to the 

    //clicked link should arrive here filtered

    //upon filter, change the url to activites/hiking activities/fishing?
    
    
    
    
    return(
        <div>
            Activities Page:
            
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
                        {/* {filteredActivities} */}
                        
                    </ul>
                </div>
        </div>

        
    )
}