import axios from 'axios'
import { useEffect, useState } from 'react';




export default function Welcome() {



    const [parkData, setParkData] = useState([])
    let API_KEY = process.env.API_KEY
    useEffect(() => {
        axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=acad&${API_KEY}`)
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