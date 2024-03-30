const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.USER_SERVICE_PORT || 3002;
const uri = "mongodb://localhost:27017/products";
mongoose
  .connect(process.env.MONGO_URI || uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
