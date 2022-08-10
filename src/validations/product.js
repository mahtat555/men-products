import Joi from "joi";
import Validation from "../../core/validation.js"


class ProductValidation extends Validation {
  /**
   * The schema for validating the data when creating new documents
   */
  createSchema = {
    reference: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
  };

  /**
   * The schema for validating the data when updating existing documents
   */
  updateSchema = {
    reference: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
  };
}


export default new ProductValidation();
