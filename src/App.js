import logo from "./logo.svg";
import "./App.css";

function App() {
  const API = "ed2eb291a45f1ecaf471c5d34fe79cbf";
  // https://www.thecocktaildb.com/api.php
  // const res = fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //   });

  const gettindWeather = async () => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`
    );
    var data = await api_url.json();
  };

  return <p>{data}</p>;

}
export default App;

