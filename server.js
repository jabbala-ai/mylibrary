if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'./.env'})
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const boadyParser = require('body-parser')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/authors', authorRouter)


//

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error=>console.log(error))
db.once('open', ()=>console.log("Connected to DB"))




app.listen(process.env.PORT || 3000)
