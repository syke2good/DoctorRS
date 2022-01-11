const router = require('express').Router();
const {Appointment,Doctor} = require("../models")
const withAuth = require ("../utils/auth")
router.get('/', withAuth, (req, res) => {
    Doctor.findOne({where:{id:req.session.doctor_id},include:[Appointment]})
    .then(function(doctorData){
        const doctor = doctorData.get({plain:true})
        console.log(doctor)
        res.render('homepage', {
           ...doctor
        });
    }).catch(function(err){
        console.log(err)
        res.json(err)
    })
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/form', (req, res) => {
    res.render('user');
})

module.exports = router;