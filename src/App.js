import "./App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Weather from "./component/weather_main/weather";
import Form from "./component/form/form";
import { bababoe } from "./index"

function App() {
  const bababoe2 = useContext(bababoe)
  bababoe2.Maxim = "Top"
  const API = "b559aceca04d95d3c0456a935e8db281";
  // "b559aceca04d95d3c0456a935e8db281"
  // "ed2eb291a45f1ecaf471c5d34fe79cbf";
  const [Daya, setDaya] = useState({})
  const [Daya2, setDaya2] = useState({})
  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=50.45&lon=30.52&appid=${API}`)
      setDaya(response.data)
      const response2 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Kyiv&limit=5&appid=${API}`)
      setDaya2(response2.data)
    })()
  }, [])
  { console.log(bababoe2) }
  return (
    <div>
      <Form />
      <Weather {...Daya} />
    </div>

  )
}
export default App;
