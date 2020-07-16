const express = require('express')
const hbs = require('hbs')
const geocode = require('./src/utils/geocode')
const forecast = require('./src/utils/forecast')
const app = express()

// when we run our app locally  we run on a common development port which is 3000
// but when heroku will run the app on its server it will povide us with a different port num
// so we use the following code to set the port num
// heroku will provide port num via process.env.PORT so we use logical OR oper in JS
// which will check if process.env.PORT exists then tet that value as port num slse set 3000 as port num
const port = process.env.PORT || 3000

app.set('view engine','hbs')

app.set('views','templates/views')
app.use(express.static(__dirname+'/public'));
// app.set(name,value)

hbs.registerPartials('templates/partials')
app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:"Pratik Munot"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"Weather App",
        name:"Pratik Munot"
    })
})

app.get('/help',(req,res)=>{
    res.end('this is a help page')
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"You must provide an address"
        })
    }
    // ={} is just setting default param for function args
    geocode(req.query.address,(error,{latitude,longitude,location}={}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, function (error, forecastdata) {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast:forecastdata,
                location,
                address:req.query.address
            })
        })
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:"You must provide a search here"
        })
    }

    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
    res.send('<h1>404 <br> Bad Request</h1>')
})

app.listen(port,()=>{
    console.log("Server is up on port : "+port )
})

// we can use nodemon app.js -e js,hbs
// to run the file so thatnodemon will monitor all the changes made with extension of files that we listed