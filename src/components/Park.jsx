
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

<<<<<<< HEAD
     
=======
          //   console.log(indvPark.images)
            images = Object.values(indvPark.images).map((pic, index) => <img style={{width: "300px"}}  src={pic.url} alt="cool park image" />)
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
>>>>>>> 1ca20071bf97cdb92770e03fce0efc05b83c933f
   

    return(
        <div>
<<<<<<< HEAD
          <Container className="text-left">
            <Row>
              <Col xs={8}>
              

                
              <h1>{indvPark.fullName}</h1>
              <p>United States of America / {indvPark.states} / {indvPark.fullName}</p>
              <h4 className="">Alerts & Conditions</h4>
              <p>{indvPark.weatherInfo}</p>
              <h4>Description</h4>
              <p>{indvPark.description}</p>
              <p>{indvPark.directionsInfo}</p>
              <p>{indvPark.directionsUrl}</p>
              
              <p>{indvPark.url}</p>
              </Col>
              <Col>
              <h4>Basic Information</h4>
              <h6>Fees & Passes ></h6>
              <h6>Operating Hours ></h6>
              <h6>Weather ></h6>

              <h4>Activities/Amenities</h4>

              </Col>
            </Row>
          </Container>
            
=======
           {park}
            <p>{activities}</p>
            {images}
            

>>>>>>> 1ca20071bf97cdb92770e03fce0efc05b83c933f
           
        </div>
    )
}