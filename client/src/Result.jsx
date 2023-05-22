import {useLocation} from "react-router-dom"

function Result(){
    const location = useLocation()
       
    return (
        <>
         <div class = "container">
            <div class = "main-part">
                <h1>the weather</h1>
                <h3> temperature in {location.state.name} is {location.state.main.temp - 237} degree celsius</h3>
                <p>the weather is currently {location.state.weather[0].description}</p>
            </div>
         </div>
        </>
    )
}

export default Result