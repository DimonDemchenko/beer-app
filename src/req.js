const Req = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '888e645d75msh7c6fc36bfa466d0p1d81e6jsne7991bef15db',
            'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
        }
    };

    fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/5494', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
// const axios = require("axios");

// const options = {
//     method: 'GET',
//     url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/5494',
//     headers: {
//         'X-RapidAPI-Key': '888e645d75msh7c6fc36bfa466d0p1d81e6jsne7991bef15db',
//         'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
//     }
// };
// // await (options).then((data) => { console.log(data.json()) })
// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });
//     const options = {
//         method: 'GET',
//         headers: {
//             "X-API-Key": " 535ad06757dd29bd83be1e635ec10530407a8XAVTX",
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": 'no-cors'

//         }
//     };
//     // 'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
//     fetch('https://api.brewersfriend.com/v1/recipes/:1000', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

export default Req;