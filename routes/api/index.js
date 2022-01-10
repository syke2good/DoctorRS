const router = require('express').Router();
const doctorRoutes = require('./doctorRoutes');
const appointmentRoutes = require('./appointmentRoutes');


router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);


module.exports = router;
