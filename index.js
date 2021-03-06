require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const users =require('./src/routes/users')
const restaurants =require('./src/routes/restaurants')
const items =require('./src/routes/items')
const categories =require('./src/routes/categories')
const carts =require('./src/routes/carts')
const riviews =require('./src/routes/riviews')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/src/assets',express.static('src/assets/images'))
app.use(cors())

app.use('/users',users)
app.use('/restaurants',restaurants)
app.use('/items',items)
app.use('/categories',categories)
app.use('/carts',carts)
app.use('/riviews',riviews)

const port = process.env.APP_PORT


app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(port,()=>{
    console.log('App Listen on port'+port)
})