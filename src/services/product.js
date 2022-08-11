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


/**
 * Check if the Variant belongs to the Product
 */
export const checkVariantBelongsProduct = (variant, product_id) => {
  if (variant.product_id != product_id) {
    throw new APIError(403, {
      error: `You don't have the access to this variant ID ${variant.id} !!`
    })
  }
}
