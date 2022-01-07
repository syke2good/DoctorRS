const router = require('express').Router();
const scheduleRoutes = require('./scheduleRoutes');
const userRoutes = require('./userRoutes');

router.use('/schedules', scheduleRoutes);
router.use('/users', userRoutes);

module.exports = router;
