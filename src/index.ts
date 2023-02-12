const express = require('express')
const mongoose = require('mongoose')

// Configuration
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true }))

// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// Require controller
const booksController = require('../controllers/books_controller')
// Ensure routes in books controller are used when going to /books.
app.use('/books', booksController)

// Index
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3004)