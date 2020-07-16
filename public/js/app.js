// console.log("Hello")
// console.log("Pratik")

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messaeOne=document.querySelector('#msg1')
const messaeTwo=document.querySelector('#msg2')

// queryselector will always select the first ever search it finds

messaeOne.textContent = ""
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)
    messaeOne.textContent = "Loading..."
    messaeTwo.textContent = ""

    // fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messaeOne.textContent = data.error
                console.log(data.error)
            }
            else{
                messaeOne.textContent = data.location
                console.log(data.location)
                messaeTwo.textContent = data.forecast
                console.log(data.forecast)
            }
            // console.log(data)
        })
    })


})











// // https://weatherstack.com/
// // sign up and select free package
// // access api via url  =  http://api.weatherstack.com/
// // personal accsss key will be generated like  -  7b6201a634662c03c266e22501dd7b15
// // query string can be made as  -  http://api.weatherstack.com/current?access_key=7b6201a634662c03c266e22501dd7b15&query=37.8267,-122.4233
//
// const request = require('request')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')
//
//
//
// const address = process.argv[2]
// if(!address){
//     console.log("Please provide an address")
// }
// else {
//     // ES6 destructuring has been used here
//
//     geocode(address,(error,{latitude,longitude,location}) => {
//         if (error) {
//             return console.log(error)
//         }
//         // console.log(data)
//         forecast(latitude, longitude, function (error, forecastdata) {
//             if (error) {
//                 return console.log(error)
//             }
//             console.log(location)
//             console.log(forecastdata)
//         })
//     })
// }
//
// // dump (code explanation)-----------------------------------
//
// //var url = 'http://api.weatherstack.com/current?access_key=7b6201a634662c03c266e22501dd7b15&query=37,-112&units=f'
//
// // request({url:url, json:true}, function (error,response) {
// //
// //     if(error){
// //         console.log("Unable to connect to weather service!")
// //     }
// //     else if(response.body.error){
// //         // console.log(response.body)
// //         console.log("Unable to find location")
// //     }
// //     else {
// //         // console.log(response)
// //         // const data = JSON.parse(response.body)
// //         console.log(response.body.current.temperature);
// //         console.log(response.body.current.feelslike)
// //         console.log(response.body.current.weather_descriptions[0])
// //     }
// // })
//
// // whenever we make a request the response that we get is a raw response
// // to extract main info we need to use response.body followed by keys that we want to use
//
//
//
// // url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoicG5jbyIsImEiOiJja2NnOHZsYWMwcGlqMnNtMnZ1azc2cmtjIn0.DFYOaSHhFn84fYos_eFPdA&limit=1'
// // request({url:url, json:true}, function (error,response) {
// //
// //     if(error){
// //         console.log("Unable to connect to location service!")
// //     }
// //     else if(response.body.features.length===0){
// //         // console.log(response.body)
// //         console.log("Unable to find location. Try another search")
// //     }
// //     else {
// //         const latitude = response.body.features[0].center[1];
// //         const longitude = response.body.features[0].center[0];
// //
// //         console.log(latitude, longitude);
// //         // console.log(response.body.current.feelslike)
// //         // console.log(response.body.current.weather_descriptions[0])
// //     }
// // })
