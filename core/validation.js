import Joi from "joi";
import { BadRequest } from "./errors.js"


class Validation {
  /**
   * The schema for validating the data when creating new documents
   */
  createSchema = {}

  /**
   * The schema for validating the data when updating existing documents
   */
  updateSchema = {}

  /**
   * Handling the Validation of data when creating new documents
   * @param {Object} data
   * @returns {Object}
   */
  createValidation(data) {
    return this._validate(data, this.createSchema);
  }

  /**
   * Handling the Validation of data when updating existing documents
   * @param {Object} data
   * @returns {Object}
   */
  updateValidation(data) {
    return this._validate(data, this.updateSchema);
  }

  /**
   * Data Validation with a specific schema.
   * @param {Object} data
   * @param {object} schema
   * @returns {object}
   */
  _validate(data, schema) {
    schema = Joi.object(schema);
    const result = schema.validate(data);
    if (result.error) {
      throw new BadRequest(400, result.error.details)
    }
    return result.value;
  }
}


export default Validation;
