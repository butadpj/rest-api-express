import express from 'express';
import db from './app/config/db.js';
import productsRouter from './app/routes/products.routes.js';

// Initialize express
const app = express();

// Parse application/json requests
app.use(express.json());

// Parse application/x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  // You send any kind of reponse back to the client like..
  // .html, .js, .css files, etc.
  // Know more -> http://expressjs.com/en/5x/api.html#res.send

  // Here we're just sending a simple html element
  res.send("<h1>Hello World!</h1>");
})

// Connect to MongoDB using mongoose
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database");
})
.catch((err) => {
  console.log("There's an error", err);
  process.exit();
})

// Products router
app.use('/api/products', productsRouter);

// Start the server with specified port
const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is running");
  console.log(`Go to http://localhost:${8000}/`);
})

