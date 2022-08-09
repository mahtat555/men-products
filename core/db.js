import mongoose from "mongoose";


mongoose.Promise = global.Promise;

/**
 * Creating the connection to the Database
 */
const dbConnection = (dbUrl, callback) => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
      console.log("Database connection done !");

      // Used for starting the App on a specific port,
      // after creating the connection to the database
      if (callback instanceof Function) {
        callback()
      }
    })
    .catch(error => {
      console.log(error)
    })
}


export default dbConnection;
