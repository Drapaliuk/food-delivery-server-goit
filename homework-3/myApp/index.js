const express = require('express')
const app = express()
const router = express.Router()


const main = function(req, res){
    res.end('main page')
}

const contacts = function(req, res){
    res.end('constacts')
}

const about = function(req, res){
    res.end('about')
}

const users = function(req, res){
    res.end('users page')
}


const errorHandler = function(req, res, next){
    res.status(404).send('not fouuund')
    next()
}

const afterHandler = function(req, res, next){
    res.end('afterhenderdsvdsvds')
    next()
}



const get = router
    .get('/', main)
    .get('/contacts', contacts)
    .get('/users', users)
    .get('/about', about)

app
    .use('/', get)
    .use(errorHandler)
    .use(afterHandler)



app.listen(3000, function(){
    console.log('server is ok')
})