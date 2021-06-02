const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const port = 4000

// Define directive to public folder
app.use(express.static(path.join(__dirname,'public')))

//Middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs',handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources/views'))
console.log("DIR: " + __dirname)
console.log('PATH: ' + path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    console.log(req.query.searchText)
    res.render('news')
})
app.get('/search', (req, res) => {
    // console.log(req.query)

    res.render('search')
})
app.post('/search', (req, res) => {
    // đối với dữ liệu lấy từ form thì muốn lấy sẽ là req.body
    console.log("-----Test-------")
    console.log(req.body)
    console.log("-----Test-------")
    res.render('search')
})

app.listen(port, () => console.log(`App listening  at http://localhost:${port}`))