const express = require('express')
const books = express.Router()
const Book = require('../models/book')

// Index
router.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
      res.render('/index', { books })
    })
    .catch(res.status(400).json({
        message: "Seed unsuccessful"
    }))
 })

// Seed data
books.get('/seed', (req, res) => {
    Book.insertMany([
        {
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": "10",
            "imageURL": "/assets/shinobi-initiative.jpeg"
          },
          {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": "3",
            "imageURL": "/assets/tess.jpg"
          },
          {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": "8",
            "imageURL": "/assets/arathrae.jpeg"
          },
          {
            "title": "W∀RP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": "4",
            "imageURL": "/assets/warp.jpeg"
          }
    ])
    .then(res.status(200).json({
            message: "Seed successful!"
        }))
        // error message
        .catch(res.status(400).json({
            message: "Seed unsuccessful"
        }))
})

books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(books => {
          res.render('books/show', {Book})
        })
        .catch(res.status(400).json({
            message: "Seed unsuccessful"
        }))
    })
