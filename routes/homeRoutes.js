const router = require('express').Router();

router.get('/', (req, res)=>{
    res.json('homepage');
})

router.get('/login', (req, res)=>{
    res.json('login');
})


module.exports = router;