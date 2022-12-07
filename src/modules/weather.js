import axios from "axios";

const API = "b559aceca04d95d3c0456a935e8db281";

export default class Weather {
    constructor() {

        (async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=50.45&lon=30.52&appid=${API}`)
            const response2 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Kyiv&limit=5&appid=${API}`)

        })()

    }
    async Myfunc(props) {
        console.log(props)

        const coords_city = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=${API}`)
        const coords = {}
        coords.lat = coords_city.data[0].lat;
        coords.lon = coords_city.data[0].lon;

        console.log(coords.lat)
        const weather_city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API}`)
        console.log(weather_city.data)
    }

}
