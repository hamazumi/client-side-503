
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

  let API_KEY = process.env.REACT_APP_API_KEY


export default function Park(props) {

    const [indvPark, setIndvPark] = useState([])

    const {id} = useParams()
    
    console.log({id}.id)
    // console.log(props.match.params.id)
    useEffect (() => {
        async function getState() {
          try{
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`)
            
            
            console.log(response.data.fullName)
            
            console.log(response.data.data[0])

            setIndvPark(response.data.data[0])
            
            


          } catch (err) {
            console.log(err)
          }
        }
        getState()
      }, [])

     
   

    return(
        <div>
            <h1>{indvPark.fullName}</h1>
            <p>{indvPark.description}</p>
            <p>{indvPark.directionsInfo}</p>
            <p>{indvPark.directionsUrl}</p>
            <p>{indvPark.weatherInfo}</p>
            <p>{indvPark.url}</p>
            <p>{indvPark.entranceFees}</p>
            {/* <p>{indvPark.images[0].url}</p> */}
           
        </div>
    )
}