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

// router.get(['/search',"/:id"], async (req, res) => {
//     doctor_specialty = req.query.specialty
//     doctor_last_name = req. query.

router.get('/search', async (req, res) => {
    try {
        res.render('search');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/search/:id", async (req, res) => {
  try {
    const doctorData = await Doctor.findAll({
        where: {
            specialty: req.params.id
        }
    }, {
      attributes: { exclude: ['password'] },
      include: [{ model: Appointment }],
    });

    // Serialize data so the template can read it
    const doctors = doctorData.map(doctor => doctor.get({ plain: true }));
    console.log(doctors)
    res.render('search', {
    doctors
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//     const doctors = doctorData.map(doctor => doctor.get({ plain: true }));

//     res.render('search', {
//     doctors
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;