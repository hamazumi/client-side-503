import {
    useParams
  } from 'react-router-dom'
  import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'

  let API_KEY = process.env.REACT_APP_API_KEY
  
export default function Park() {
    const {parkCode} = useParams()

    const [post, setPost] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `https://developer.nps.gov/api/v1/parks/?parkCode=${parkCode}limit=600&api_key=${API_KEY}`
          const response = await axios.get(url)
        
          setPost(response.data.data)
          console.log('inside the park.jsx' + response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

    return(
        <div>
            {post.fullName}
        </div>
    )
}