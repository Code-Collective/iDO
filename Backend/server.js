require('dotenv').config({path: '../.env'})

const express = require('express')
const MongoClient = require('mongodb').MongoClient
const db = require('./database/db.js')

const app = express()
const port = 8000

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  app.listen((process.env.PORT || port), () => {
    console.log('We are live and connected to database')
  })
})