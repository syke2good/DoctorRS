const router = require('express').Router();
// const doctorRoutes = require('./doctorRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const userRoutes = require('./userRoutes');

// router.use('/doctors', doctorRoutes);
router.use('/schedules', scheduleRoutes);
router.use('/users', userRoutes);

module.exports = router;
