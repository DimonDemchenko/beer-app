import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const API = "b559aceca04d95d3c0456a935e8db281";
  // "b559aceca04d95d3c0456a935e8db281"
  // "ed2eb291a45f1ecaf471c5d34fe79cbf";
  const [Daya, setDaya] = useState("")
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`).then((res) => { setDaya(res.data) })
  }, [])
  return (
    <div>
      <p>{Daya.base}</p>

    </div>
  )
}
export default App;

