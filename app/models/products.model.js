import db from "../config/db.js";

const mongoose = db.mongoose;

// Create a Product Schema
const productSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    quantity: Number,
    unit_price: Number,
    retail_price: Number
  }
)

// Create a model out of Product Schema
const Product = mongoose.model('product', productSchema)

export default Product