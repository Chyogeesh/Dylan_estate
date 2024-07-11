const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Create a new property listing
router.post('/properties', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json({ property });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
