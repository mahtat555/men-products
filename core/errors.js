
/**
 * Handling the 'Invalid JSON Format' error
 */
const invalidJsonFormat = (error, req, res, next) => {
  if (error.type == "entity.parse.failed") {
    res.status(500).send({ message: "Invalid JSON format", error })
  }
}


export { invalidJsonFormat }
