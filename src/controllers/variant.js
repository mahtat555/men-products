import Variant from '../models/variant.js'
import { checkProductExists, checkVariantBelongsProduct } from '../services/product.js';

/**
 * Retrieve the List of variants of a specific product
 */
export const listVariants = async (req, res, next) => {
  const product_id = req.params.product_id

  //  Check if the product exists
  try {
    await checkProductExists(product_id)
  } catch (error) {
    return next(error)
  }

  const variants = await Variant.find({ product_id: product_id })
  res.status(200).json(variants);
}

/**
 * Retrieve a specific variant of a specific product
 */
export const retrieveVariant = async (req, res, next) => {
  const product_id = req.params.product_id
  const variant_id = req.params.variant_id

  //  Check if the product exists
  try {
    await checkProductExists(product_id)
  } catch (error) {
    return next(error)
  }

  const variant = await Variant.findById(variant_id)

  if (variant) {
    // Check if the Variant belongs to the Product
    try {
      checkVariantBelongsProduct(variant, product_id)
    } catch (error) {
      return next(error)
    }

    res.status(200).json(variant)
  } else {
    res.status(404).json({ "error": `No variant found with ID ${variant_id} !!` })
  }
}
