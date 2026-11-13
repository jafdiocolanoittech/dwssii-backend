const Activity = require('../models/Activity');

// @desc    Get all activities (Public)
// @route   GET /api/activities
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find().sort({ eventDate: -1 });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Create new activity (Protected - Personnel only)
// @route   POST /api/activities
exports.createActivity = async (req, res) => {
    try {
        const { title, description, imageUrl, eventDate } = req.body;
        
        const newActivity = new Activity({
            title,
            description,
            imageUrl,
            eventDate,
            postedBy: req.user ? req.user.id : null
        });

        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};