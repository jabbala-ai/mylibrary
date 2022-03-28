if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'./.env'})
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

const indexRouter = require('./routes/index')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)


//

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error=>console.log(error))
db.once('open', ()=>console.log("Connected to DB"))




app.listen(process.env.PORT || 3000)
