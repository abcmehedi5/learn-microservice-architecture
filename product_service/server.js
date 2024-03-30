const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PRODUCT_SERVICE_PORT || 3001;
const uri = "mongodb://localhost:27017/products";
mongoose
  .connect(process.env.MONGO_URI || uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
