
/**
 * Handling the 'Invalid JSON Format' error
 */
const invalidJsonFormat = (error, req, res, next) => {
  if (error.type == "entity.parse.failed") {
    res.status(500).send({ message: "Invalid JSON format", error })
  }
}

// 404 NotFound Error
const notFound = (req, res) => {
  res.status(404).json({ "message": "Not Found" })
}


export { invalidJsonFormat, notFound }
