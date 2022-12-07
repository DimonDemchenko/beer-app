
import React from "react"
const Weather = (props)=>{

    return (<div className="weather_main">
        
         <p>{ props.coord?.lon}</p>
         <ul>{ props.weather?.map((elem)=>
         (<li> {elem.main} {elem.id}</li>))}</ul>
    </div>)
}
export default Weather;