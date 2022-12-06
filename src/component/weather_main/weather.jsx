
import React from "react"
const Weather = (base, weather_Arr)=>{

   

    return (<div className="weather_main">
         <p>{JSON.stringify(base)}</p>
        {/* <p>{JSON.stringify(weather_Arr)}</p> */}
      
    </div>)
}
export default Weather;