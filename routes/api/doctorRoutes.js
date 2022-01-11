const router = require('express').Router();
const { Doctor } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log("hello");
    const doctorData = await Doctor.create(req.body);

    req.session.save(() => {
      req.session.doctor_id = doctorData.id;
      req.session.logged_in = true;

      res.status(200).json(doctorData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
      console.log (req.body)
    const doctorData = await Doctor.findOne({ where: { email: req.body.email } });
    console.log("hello");

    if (!doctorData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await Doctor.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.doctor_id = doctorData.id;
      req.session.logged_in = true;

      res.json({  
          message: 'You are now logged in!' 
        });
    });

  } catch (err) {
      console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;