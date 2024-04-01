const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    // const products = await Product.find();
    res.send("product data getting successfully");
  } catch (err) {
    res.status(500).send("Internal Server Errors" , err?.message);
  }
});

module.exports = router;
