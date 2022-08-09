import express from "express";

import productRoutes from "./product.js"
import { notFound } from "../../core/errors.js"


const router = express.Router();

// Product Routes
router.use('/product/', productRoutes);

// Handling the 'Not Found 404' error
router.use(notFound)

export default router;
