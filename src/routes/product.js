import express from "express";
import * as productController from "../controllers/product.js";


const router = express.Router();

// Retrieve the List of products
router.get("", productController.listProducts)

// Add new product
router.post("", productController.createProduct)

// Delete a specific Product
router.delete("/:product_id", productController.deleteProduct)

// Update a specific Product
router.patch("/:product_id", productController.updateProduct)

// The Product {product_id}
router.get("/:product_id", productController.retrieveProduct)


export default router;
