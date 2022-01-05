const sequelize = require('../config/connection');
const { Doctor, Appointment } = require('../models');

const doctorData = require('./doctorSeedData.json');
const appointmentData = require('./appointmentSeedData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const doctors =await Doctor.bulkCreate(doctorData, {
    individualHooks: true,
    returning: true,
  });
  console.log(doctors)
  for (const appointment of appointmentData) {
    await Appointment.create({
      ...appointment,
      // doctor_id: doctors[Math.floor(Math.random() * doctors.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
