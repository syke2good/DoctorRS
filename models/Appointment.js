const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Appointment model
class Appointment extends Model {}

// create fields/columns for Appointment model
Appointment.init(
  {
    //Store a reference of the "id" of the "Doctor" that has this appointment

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
          model:"doctor",
          key: "id"
      }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'appointment'
  }
);

module.exports = Appointment;
