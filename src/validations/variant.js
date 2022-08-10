import Joi from "joi";
import Validation from "../../core/validation.js"


class VariantValidation extends Validation {
  /**
   * The schema for validating the data when creating new documents
   */
  createSchema = {
    product_id: Joi.objectId().required(),
    sku: Joi.string().required(),
    specification: Joi.string().required(),
    price: Joi.number().required(),
  };

  /**
   * The schema for validating the data when updating existing documents
   */
  updateSchema = {
    product_id: Joi.objectId(),
    sku: Joi.string(),
    specification: Joi.string(),
    price: Joi.number(),
  };
}


export default new VariantValidation();
