
import axios from 'axios' 

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from 'react-router-dom'
  
  import {
    useState,
    useEffect
  } from 'react'

  let API_KEY = process.env.REACT_APP_API_KEY


export default function Park(props) {

    console.log(props.match.params.id)
    useEffect (() => {
        async function getState() {
          try{
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${props.match.params.id}&api_key=${API_KEY}`)
            
            
            props.setResults(response)
            
            console.log(response.data.data)

          } catch (err) {
            console.log(err)
          }
        }
        getState()
      }, [])


   

    return(
        <div>
            <h1>test</h1>
            {/* {parkInfo} */}
        </div>
    )
}