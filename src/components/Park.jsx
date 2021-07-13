 
export default function Park(props) {
    // const parkInfo = props.results.map((park) => {
    //     return(
    //        <div>
    //            {park.fullName}
    //        </div>
    //     )
    // })
    console.log(props.match.params.id)
    console.log(props)


   

    return(
        <div>
            <h1>test</h1>
            {/* {parkInfo} */}
        </div>
    )
}