const request = require('request')

const forecast = function(latitude,longitude, callback){
    const url = 'http://api.weatherstack.com/current?access_key=7b6201a634662c03c266e22501dd7b15&query='+latitude+','+longitude //+'&units=m'
    request({url:url, json:true}, function (error,response) {
        if(error){
            callback("Unable to connect to weather service!",undefined)
        }
        else if(response.body.error){
            // console.log(response.body)
            callback("Unable to find location. Try another search",undefined)
        }
        else {
            callback(undefined,
                response.body.current.weather_descriptions[0]+'. It is currently '+
                response.body.current.temperature+' degrees. It feels like '+
                response.body.current.feelslike+' degrees out there')


            // console.log(latitude, longitude);
            // console.log(response.body.current.feelslike)
            // console.log(response.body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast