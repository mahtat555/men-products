import "./config.js"
import { NotAuth, BadRequest } from "./errors.js"


/**
 * Implement Authentication Middleware
 */
const apiAuth = (req, res, next) => {
  // Retrieve the key from the headers
  let key;
  try {
    key = req.headers.authorization.split(' ')[1]
  } catch (error) {
    throw new BadRequest(400, "Make sure to provide the API key in the Authorization header")
  }

  // Check the user API key
  if (!key || key !== process.env.API_KEY) {
    throw new NotAuth()
  } else {
    next()
  }
}


export default apiAuth
