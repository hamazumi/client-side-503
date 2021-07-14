
import axios from 'axios' 

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
    const filterAll = props.results.filter((park) => {

        return park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(actSearch.toString().toLowerCase()))
    })

    let x  = props.results.forEach(park => console.log(park.activities.filter((activity) => activity.name.toString().toLowerCase().includes(actSearch.toString().toLowerCase()))))
    if(x != []){
        console.log("yepa")
    }
    // console.log(filterAll)

    const renderParks = filterAll.map((park, index) => <div key={index}>{park.fullName}</div>)

   

    //filter by activity, have a form option that adds it to the 

    //clicked link should arrive here filtered

    //upon filter, change the url to activites/hiking activities/fishing?
    
    
    
    
    return(
        <div>
            Activities Page:
            {/* {renderParks} */}
                <form action="/results" >
                    <h1></h1>
                    <input type="text" id="search" onChange={e => setActSearch(e.target.value)}/>
                    <br/>
                    <br/>
                    {/* <input type="submit" onSubmit={e => props.setResults(renderParks)} /> */}

                </form>
                <div className="textboxSearch" style={{width: "450px"}}>

                    <ul style={{backgroundColor: "white"}} >
                        {renderParks}
                    </ul>
                </div>
        </div>

        
    )
}