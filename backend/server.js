// express is the web framework were using on the backend to create our routes
// we can use React syntax instead of common JS sytax because we installed ES Modules
// were useing the same syntax for the front and back end
import express from "express";
// importing enviroment variables
import dotenv from "dotenv";
// must call config method above anywhere where we use the enviroment variables
dotenv.config();
// importing the products array from products.js
import products from "./data/products.js";
// frontend is running on port 3000, backend will run on 5000 - we have a variable for this port
// to access an env variables you must prefix with "process.env"
const port = process.env.PORT || 5000;

// initiallizing express and setting it to a variable
const app = express();

// we are creating our first route -> making a get request
// get request to "/"
// request and response object
// we are just taking the response object sending some text to this route
// if we go to localhost:5000 we should see the text below
// this will load the react app eventually
app.get("/", (req, res) => {
  res.send("API is running...");
});

// route to serve ALL producst (dummy data)
// get request to api/products and then send a json response with the products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// route for SINGLE product
// get request to api/products/:id (":id" this is placeholder for whatever the id is) and then send a JSON response with the product we find in the array that matches the ID in the URL
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// this is to start the server up
// we take our app variable and listen on the port variable created above
// arrow function that says console logand port variabke
app.listen(port, () => console.log(`server is running on ${port}`));

// installing nodemon and concurrently
// nodemon -> so we don't need to reboot server every time we make a change
// concurrently -> so we can boot server and frontend at the same time
