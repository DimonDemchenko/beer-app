import "./App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Weather_comp from "./component/weather_main/weather";
import Form from "./component/form/form";
import { bababoe } from "./index";
import Weather from "./component/weather_main/weather";

function App() {
  const bababoe2 = useContext(bababoe);
  const API = "b559aceca04d95d3c0456a935e8db281";

  return (
    <div>
      <Form />
    </div>
  );
}
export default App;
