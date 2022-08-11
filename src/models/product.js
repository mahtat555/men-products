import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Product = mongoose.model('Product', ProductSchema)


export default Product
