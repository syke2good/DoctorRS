const router = require('express').Router();

router.get('/', (req, res)=>{
    res.json('homepage');
})


module.exports = router;