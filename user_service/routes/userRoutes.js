const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ data: users, message: "data getting" });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
