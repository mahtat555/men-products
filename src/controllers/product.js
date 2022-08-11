import Product from '../models/product.js'
import productValidation from "../validations/product.js"


/**
 * Retrieve the List of products
 */
export const listProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
}

/**
 * Create a new product
 */
export const createProduct = async (req, res, next) => {
  let data = req.body;

  // Data validation
  try {
    data = productValidation.createValidation(data)
  } catch (error) {
    return next(error);
  }

  try {
    const product = await Product.create(data);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * Delete a specific Product
 */
export const deleteProduct = async (req, res) => {
  const product_id = req.params.product_id

  try {
    const product = await Product.findByIdAndDelete(product_id)

    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ "error": `No product found with ID ${product_id} !!` })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * Update a specific Product
 */
export const updateProduct = async (req, res, next) => {
  let data = req.body;
  const product_id = req.params.product_id

  // Data validation
  try {
    data = productValidation.updateValidation(data)
  } catch (error) {
    return next(error);
  }

  try {
    let product = await Product.findByIdAndUpdate(product_id, data)

    if (product) {
      product = await Product.findById(product_id)
      res.status(200).json(product);
    } else {
      res.status(404).json({ "error": `No product found with ID ${product_id} !!` })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * Retrieve a specific product
 */
export const retrieveProduct = async (req, res) => {
  const product_id = req.params.product_id
  const product = await Product.findById(product_id)

  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ "error": `No product found with ID ${product_id} !!` })
  }
}
