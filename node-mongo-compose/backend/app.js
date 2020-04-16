const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')
// db acima é o container do banco


//teste --> retornando string do backend
server.get('/', (req, res, next) => res.send('Esse é o Backend'))
server.listen(3000)