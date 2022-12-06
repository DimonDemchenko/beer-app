
import React from "react"
const Weather = (object)=>{
    const data = ()=>{
        if(object!=undefined)
        {
                return object;
        }
    }
    return (<div className="weather_main">
        
         <p>{ JSON.stringify(data())}
         
         </p>
    </div>)
}
export default Weather;