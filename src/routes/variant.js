import express from "express";
import * as variantController from "../controllers/variant.js";


const router = express.Router({ mergeParams: true });

// Retrieve the List of variants of a specific product
router.get("", variantController.listVariants)

// Retrieve a specific variant of a specific product
router.get("/:variant_id", variantController.retrieveVariant)


export default router;
