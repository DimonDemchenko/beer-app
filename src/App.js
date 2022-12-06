import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./component/weather_main/weather";
function App() {
  const API = "b559aceca04d95d3c0456a935e8db281";
  // "b559aceca04d95d3c0456a935e8db281"
  // "ed2eb291a45f1ecaf471c5d34fe79cbf";
  const [Daya, setDaya] = useState({})
  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`)
      setDaya(response.data)
    })()
  }, [])

  return (
    <Weather base={Daya.base} weather_arr={Daya.weather} coords={Daya.coords} />
  )
}
export default App;

