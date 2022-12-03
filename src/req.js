const Req = async () => {
  const options = {
    method: "GET",
    // headers: {
    //     'Content-Type': "application/json",
    //     'X-Api-Key': 'ed2eb291a45f1ecaf471c5d34fe79cbf'
    // }
  };
  const API = "ed2eb291a45f1ecaf471c5d34fe79cbf";
  // https://www.thecocktaildb.com/api.php
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default Req;
