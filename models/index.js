const Doctor = require('./Doctor');
const Appointment = require('./Appointment');

//an appointment belongs to a single doctor
Appointment.belongsTo(Doctor, {
  // Define the third table needed to store the foreign keys
  foreignKey: "doctor_id",
});

//A doctor can have many appointments
Doctor.hasMany(Appointment, {
  // Define the third table needed to store the foreign keys
  foreignKey: "doctor_id",
  onDelete: "CASCADE",
});

module.exports = { Doctor, Appointment};
