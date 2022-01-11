const router = require('express').Router();
const doctorRoutes = require('./doctorRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const searchRoutes= require('./searchRoutes');



router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/search', searchRoutes);


module.exports = router;
