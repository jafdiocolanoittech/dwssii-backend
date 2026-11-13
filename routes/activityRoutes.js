console.log("=== ACTIVITY ROUTES FILE IS LOADED ===");
const express = require('express');
const router = express.Router();
const { getActivities, createActivity } = require('../controllers/activityController');

// Public route
router.get('/', getActivities);

// Protected route
router.post('/', createActivity); 

// THIS EXPORTS THE ROUTER SO SERVER.JS CAN USE IT:
module.exports = router;