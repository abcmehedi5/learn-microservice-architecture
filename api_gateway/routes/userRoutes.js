const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    try {
        const response = await axios.post('http://user_service:3002/users', req.body);
        res.status(201).send(response.data);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://user_service:3002/users');
        res.send(response.data);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
