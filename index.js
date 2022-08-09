import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv'

import dbConnection from "./core/db.js"
import { invalidJsonFormat } from './core/errors.js'

/* Get the configuration from the .env file */
dotenv.config()

/* Express App */
const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL
const app = express()

/* Specifying that we will use JSON data in the whole App */
app.use(bodyParser.json({ type: () => true, }));

/* Enable CORS */

/* Routes */


// Handling the 'Invalid Json Format' errors
app.use(invalidJsonFormat)

/* Database Connection */
dbConnection(MONGODB_URL, () => {
  // Start the App on a specific port
  // Listen for requests
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`)
  })
})
