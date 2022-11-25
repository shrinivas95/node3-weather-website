const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=216d27998f1db378b7442a8c25c321d1&query='+ latitude +','+ longitude +'&units=f'
    
    request({ url , json : true},(error, { body })=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){  
            callback('Unable to find location!', undefined)
        }else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature +' degrees out,'+' It feels like '+body.current.feelslike+'. The humidity is '+body.current.humidity+'g.m-3')
        }
    })
}

module.exports = forecast