import axios from 'axios'
import { useEffect, useState } from 'react';


let API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
export default function Welcome() {



    const [parkData, setParkData] = useState({})
    
    useEffect(() => {
        axios.get(`https://developer.nps.gov/api/v1/parks?park&api_key=${API_KEY}`)
        .then((response) => {
          setParkData(response)
          
          console.log("log",response)
        })
        .catch((err) => console.log(err))
      }, [])




    
    return(
        <div>
            <form>
                <h1>Search for Parks in your State!</h1>
                <input type="text" placeholder="Ex: FL, CA" />
                <br />
                <input type="submit" />

            </form>
        </div>
        
    )
}