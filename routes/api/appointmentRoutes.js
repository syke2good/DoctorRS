const router = require('express').Router();
const { Appointment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAppointment = await Appointment.create({
      ...req.body,
      doctor_id: req.session.doctor_id,
    });

    res.status(200).json(newAppointment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const appointmentData = await Appointment.destroy({
      where: {
        id: req.params.id,
        doctor_id: req.session.doctor_id,
      },
    });

    if (!appointmentData) {
      res.status(404).json({ message: 'No appointment found with this id!' });
      return;
    }

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
