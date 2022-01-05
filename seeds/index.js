const sequelize = require('../config/connection');
const { Doctor, Appointment } = require('../models');

const doctorData = require('./doctorSeedData.json');
const appointmentData = require('./appointmentSeedData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
