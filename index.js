const http = require('http')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const logger =morgan('tiny')

const app = express()
const server = http.createServer(app)

const port = 3300
const host = 'localhost'

// Needed for Templates 
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger)
app.use(helmet())

// app.get ('/', (req,res)=> {
//     res.send('Hello World')
// })

const arrObj =[
    "Computer",
    "Key-Board",
    "Mouse",
    "Glasses",
    "Headphones"
]

// Needed for templates rendering
app.get('/', (req,res)=>{
    res.render('home', {
        locals: {
            message : "Hello This is done on the es6 Template Engine"
        }
    })
})

app.get('/items', (req,res)=>{
    res.json(arrObj)
})


app.get('*', (req,res)=>{
    res.status(404).send('<h1>This is not the page your looking for!</h1>')
})

server.listen (port, host, ()=>{
    console.log(`Running on ${host}: ${port}`)
})

