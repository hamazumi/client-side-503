
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

  import {Container, Row, Col, Image} from 'react-bootstrap'

  let API_KEY = process.env.REACT_APP_API_KEY

export default function Park(props) {


  // await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
  // .then((res) => {
  //     console.log(res)

  //     let ansArray = []
  //     console.log(res.data.myFavs)
  // })


    const [indvPark, setIndvPark] = useState(null)


    async function handleSave(e) {
      e.preventDefault()
      // console.log('add to faves')
      await axios.put(`http://localhost:3001/api-v1/users/park/${id}/add`, {email : props.currentUser.email})
    }

    async function handleDelete(e) {
      e.preventDefault()
      // console.log('add to faves')
      await axios.put(`http://localhost:3001/api-v1/users/park/${id}/delete`, {email : props.currentUser.email})
     
    }

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
            
            // test


          } catch (err) {
            console.log(err)
          }
        }
        getState()
      }, [])
          
            let images, activities, parkfullName, parkDescription, parkDirectionsInfo, parkDirectionsUrl, parkWeatherInfo, parkUrl, parkStates, renderedImages, headerImage, headerImageArray, parkCode
      

      // --------- to make sure things dont load before call is finished -------------      
      if(indvPark){


          //   console.log(indvPark.images)
            images = Object.values(indvPark.images).map((pic, index) =><Col xs={{span: 3}}> <div style={{height: '250px', position: 'relative', overflow: 'hidden'}}><Image style={{width: '100%'}}src={pic.url} rounded /></div></Col>)
            headerImageArray = Object.values(indvPark.images).map((pic, index) => <img style={{width: '100%'}}  src={pic.url} alt="cool park image" />)
            headerImage = headerImageArray[0]
            // renderedImages = images.forEach((img) => {
            //     <Col xs={{span: 2, offset: 3}}>{img}</Col>
            // })
            parkCode = indvPark.parkCode
            activities = Object.values(indvPark.activities).map((park, index) => <span key={index}> {park.name} |</span>)
          //  console.log(typeof indvPark.activities)
          console.log(indvPark)
          
          parkfullName = (
              <>
              <p>{indvPark.fullName}</p>
              </>)
          parkStates = (
              <>
              <p>{indvPark.states}</p>
              </>)
          parkDescription = (
              <>
              <p>{indvPark.description}</p>
              </>)
          parkDirectionsInfo = (
              <>
              <p>{indvPark.directionsInfo}</p>
              </>)
          parkDirectionsUrl = (
              <>
              <p>{indvPark.directionsUrl}</p>
              </>)
          parkWeatherInfo = (
              <>
              <p>{indvPark.weatherInfo}</p>
              </>)
          parkUrl = (
              <>
              <p>{indvPark.url}</p>
              </>)
     
          
        }

     

   

    return(
        <div>
          
        
          <Container className="text-left">
          <div style={{height: '250px', position: 'relative', overflow: 'hidden'}}>
            {headerImage}
          </div>
            <Row>
              <Col xs={8}>
              

             
              <h1>{parkfullName}</h1>
              <form>
                {/* <label>{parkCode}</label> */}
                <input hidden type="text" value={parkCode}/>
                <button onClick={(e) => handleSave(e)}>Add to favorites</button>
                <button onClick={(e) => handleDelete(e)}>Delete from favorites</button>
              </form>

              
              {/* <p>United States of America / <span>{parkStates}</span> / <span>{parkfullName}</span></p> */}
              <h4 className="">Alerts & Conditions</h4>
              <p>{parkWeatherInfo}</p>
              <h4>Description</h4>
              <p>{parkDescription}</p>
              <p>{parkDirectionsInfo}</p>
              <p>{parkDirectionsUrl}</p>
              
              <p>{parkUrl}</p>
              </Col>
              <Col>
              <h4>Basic Information</h4>
              <h6>Fees & Passes </h6>
              <h6>Operating Hours </h6>
              <h6>Weather </h6>

              <h4>Activities/Amenities</h4>
                {activities}
              </Col>
            </Row>
            <h3>Images</h3>
            <Row>
              
              {images}
            </Row>
          </Container>
          {/* {images} */}
            
           
        </div>
    )
}