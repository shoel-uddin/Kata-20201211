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
app.use(express.urlencoded ({extended: true}))

// app.get ('/', (req,res)=> {
//     res.send('Hello World')
// })

const arrEmploy =[
    {
        firstName: "Elsie",
        lastName: "Orn",
        jobTitle: "Chief Communications Officer",
        jobArea: "Intranet",
        prefix: "Miss",
        suffix: "II",
        birthDate: "2013-02-19T13:58:22.372Z",
        startDate: "2015-12-20T17:25:49.141Z"
    },
    {
        firstName: "Caroline",
        lastName: "Trantow",
        jobTitle: "International Directives Designer",
        jobArea: "Integration",
        prefix: "Mr.",
        suffix: "Sr.",
        birthDate: "2011-10-06T20:51:25.167Z",
        startDate: "2012-12-03T17:18:37.858Z"
    },
    {
        firstName: "Josh",
        lastName: "Ritchie",
        jobTitle: "Internal Brand Consultant",
        jobArea: "Quality",
        prefix: "Dr.",
        suffix: "PhD",
        birthDate: "1995-01-07T14:36:20.664Z",
        startDate: "2011-02-09T15:15:46.525Z"
    },
    {
        firstName: "Leopold",
        lastName: "Hahn",
        jobTitle: "Forward Marketing Coordinator",
        jobArea: "Communications",
        prefix: "Miss",
        suffix: "I",
        birthDate: "2007-06-07T18:42:04.474Z",
        startDate: "2020-08-24T02:37:21.032Z"
    },
    {
        firstName: "Yoshiko",
        lastName: "Gaylord",
        jobTitle: "Corporate Identity Associate",
        jobArea: "Mobility",
        prefix: "Dr.",
        suffix: "II",
        birthDate: "2004-10-23T18:40:12.004Z",
        startDate: "2013-10-13T17:08:59.341Z"
    }
]

// Needed for templates rendering
app.get('/', (req,res)=>{
    res.render('home', {
        locals: {
            message : "Hello This is done on the es6 Template Engine"
        }
    })
})

app.get('/list', (req,res)=>{
    //res.send(`${employee}`)
    //res.json(employee)
    res.render('list', {
        locals: {
            arrEmploy
        }
    })
})

app.get('/list/:firstName', (req,res)=>{
    const {firstName} = req.params
    const employee = arrEmploy.find(e => e.firstName === firstName)
    
    res.render('details', {
        locals : {
            employee
        }
    })
})

app.get('/create', (req, res)=> {
    res.render('create')
})

const db =[]

app.post('/create', (req,res)=>{
    const {Note} = req.body
    db.push (Note)
    //res.send('Thank You')
    res.redirect('/thank-you')

})

app.get('/thank-you', (req,res)=> {
    res.render('thank-you', {
        locals: {
            db
        }
    })
})

app.get('*', (req,res)=>{
    res.status(404).send('<h1>This is not the page your looking for!</h1>')
})

server.listen (port, host, ()=>{
    console.log(`Running on ${host}: ${port}`)
})

