/**
 * A custom errors handler used for handling the API Errors
 */
class APIError extends Error {
  constructor(status = 500, message = "Server Error") {
    super(JSON.stringify({ status, message }))
    this.status = status
    this.message = { error: message }
    this.type = "api-error"
  }
}

/**
 * Bad Request error handler
 */
class BadRequest extends APIError {
  constructor(status = 400, message = "Bad Request") {
    super(status, message)
  }
}

/**
 * Authentication error handler
 */
class NotAuth extends APIError {
  constructor(status = 401, message = "Authentication Failed") {
    super(status, message)
  }
}

/**
 * Handling the 'Not Found 404' error
 */
const notFound = (req, res) => {
  res.status(404).json({ error: "404 | Not Found" })
}

/**
 * Catch all exceptions and convert them to a JSON response.
 */
const errorHandler = (error, req, res, next) => {
  // Handling the 'Invalid JSON Format' error
  if (error.type == "entity.parse.failed") {
    res.status(400).send({ message: "Invalid JSON format", error })
  }

  // Catch all errors
  if (error.type == "api-error") {
    res.status(error.status).send(error.message)
  } else {
    res.status(500).send(error.message)
  }
}


export { APIError, BadRequest, NotAuth, notFound, errorHandler }
