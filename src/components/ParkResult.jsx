import {Link} from 'react-router-dom'

export default function ParkResult(props) {

        const renderParks = props.results.map((park, index) => <li style={{ listStyleType: "none" }}><Link  style={{ color: "darkgreen" }}  to={`/park/${park.parkCode}`}>{park.fullName}</Link></li>)


    return(
        <div>
            {renderParks}
        </div>
    )
}