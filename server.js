// if(process.env.NODE_ENV!=='production'){
//     require('dotenv').load()
// }
const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://teja9505128095:Teja95051@cluster0.wbuv5ig.mongodb.net/?retryWrites=true&w=majority')
const db=mongoose.connection
db.on('error',error => console.error(error))
db.once('error',() => console.log('connted to db '))
const expressLayouts=require('express-ejs-layouts')
const indexrouter =require('./routes/index')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexrouter)
app.listen(process.env.PORT || 3000)