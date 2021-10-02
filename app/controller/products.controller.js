import Product from "../models/products.model.js";

// Find all Products
const productsController = {
  // Get all Products
  getAll: (req, res) => {
    Product.find() // returns a promise
    .then((data) => res.send(data)) // Send the data back to client
  },

  // Create and Save a new Product
  create: (request, res) => {
    // Using our Product Model, 
    // Create new product based on user input    
    const newProduct = new Product({
      name: request.body.name,
      category: request.body.category,
      quantity: request.body.quantity,
      unit_price: request.body.unit_price,
      retail_price: request.body.retail_price
    })

    newProduct.save(newProduct) // returns a promise
    .then((data) => res.send(data)) // Send the data back to client
  },
}

export default productsController