import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import "./core/config.js"
import dbConnection from "./core/db.js"
import apiAuth from "./core/auth.js"
import apiRoutes from "./src/routes/index.js"
import { errorHandler } from './core/errors.js'

/* Express App */
const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL
const app = express()

/* Specifying that we will use JSON data in the whole App */
app.use(bodyParser.json({ type: () => true, }));

/* Enable CORS */
app.use(cors());

/* API authentication */
app.use(apiAuth)

/* API Routes */
app.use('/api/', apiRoutes)

// Handling the errors
app.use(errorHandler)

/* Database Connection */
dbConnection(MONGODB_URL, () => {
  // Start the App on a specific port
  // Listen for requests
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`)
  })
})
