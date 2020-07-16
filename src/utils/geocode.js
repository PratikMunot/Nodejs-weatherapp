const request = require('request')

// const geocode = function(address, callback){
const geocode = function(address, callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicG5jbyIsImEiOiJja2NnOHZsYWMwcGlqMnNtMnZ1azc2cmtjIn0.DFYOaSHhFn84fYos_eFPdA&limit=1'

    // request({url:url, json:true}, function (error,{body}) {  // ES6 destructuring - if used then remove response. everywhere
    request({url:url, json:true}, function (error,response) {
    if(error){
        callback('Unable to connect to location service!',undefined)
    }
    else if(response.body.features.length===0){
        // console.log(response.body)
        callback("Unable to find location. Try another search",undefined)
    }
    else {
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
        })


            // console.log(latitude, longitude);
            // console.log(response.body.current.feelslike)
            // console.log(response.body.current.weather_descriptions[0])
        }
    })
}

module.exports = geocode