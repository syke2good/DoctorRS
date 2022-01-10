const router = require('express').Router();
const { Appointment, Doctor } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const appointmentData = await Appointment.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const appointment = appointmentData.map((appointment) => appointment.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      appointment, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const appointmentData = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: Doctor,
          attributes: ['name'],
        },
      ],
    });

    const appointment = appointmentData.get({ plain: true });

    res.render('appointment', {
      ...appointment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const appointmentData = await Doctor.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Doctor }],
    });

    const Doctor = doctorData.get({ plain: true });

    res.render('profile', {
      ...doctor,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;