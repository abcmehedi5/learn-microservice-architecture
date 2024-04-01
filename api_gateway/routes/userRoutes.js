const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3002/users', req.body);
        res.status(201).send(response.data);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/users');
        res.send(response.data);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});


// DELETE method to delete a user
router.delete("/user-delete/:id", async (req, res) => {
    try {
      const id = req.params.id; // Corrected to use params instead of param
      const response = await axios.delete(`http://localhost:3002/users/user-delete/${id}`);
      res.send({ message: "User deleted successfully", data: response.data });
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;
