import Product from '../models/product.js';
import { APIError } from '../../core/errors.js'

/**
 * Check if a specific product exists or not
 */
export const checkProductExists = async (product_id) => {
  const product = await Product.findById(product_id)
  if (!product) {
    throw new APIError(404, { error: `No product found with ID ${product_id} !!` })
  }
}
