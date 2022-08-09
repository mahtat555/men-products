import mongoose from "mongoose";


const VariantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  sku: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Variant = mongoose.model('Variant', VariantSchema)


export default Variant
