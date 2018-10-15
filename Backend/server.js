import express from 'express'
import { MongoClient } from 'mongodb'
import { url } from './database/db.js'

require('dotenv').config({ path: '../.env' })

const app = express()
const port = 8000

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  app.listen((process.env.PORT || port), () => {
    console.log('We are live and connected to database')
  })
})
