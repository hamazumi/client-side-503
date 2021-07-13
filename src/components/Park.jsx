
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

    const [indvPark, setIndvPark] = useState(null)

    const {id} = useParams()
    
    // console.log({id}.id)
    // console.log(props.match.params.id)
    useEffect (() => {
        async function getState() {
          try{
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`)
            
            
            console.log(response.data.fullName)
            
            console.log(typeof response.data.data[0].activities)
            setIndvPark(response.data.data[0])
            
            


          } catch (err) {
            console.log(err)
          }
        }
        getState()
      }, [])
      let images, activities, park
      
      if(indvPark){

          //   console.log(indvPark.images)
            images = Object.values(indvPark.images).map((pic, index) => <img style={{width: "200px"}}  src={pic.url} alt="cool park image" />)
            activities = Object.values(indvPark.activities).map((park, index) => <span key={index}> {park.name} |</span>)
          //  console.log(typeof indvPark.activities)
          park = (
              <>
              <h1>{indvPark.fullName}</h1>
            <p>{indvPark.name}</p>
            <p>{indvPark.states}</p>
            <p>{indvPark.description}</p>
            <p>{indvPark.directionsInfo}</p>
            <p>{indvPark.directionsUrl}</p>
            <p>{indvPark.weatherInfo}</p>
            <p>{indvPark.url}</p>
            

              </>

          )
        }
   

    return(
        <div>
           {park}
            <p>{activities}</p>
            {images}
            

           
        </div>
    )
}