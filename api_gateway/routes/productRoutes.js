const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      "http://product_service:3001/products",
      req.body
    );
    res.status(201).send(response.data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://product_service:3001/products");
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
