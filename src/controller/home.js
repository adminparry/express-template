const router = require('express').Router();


router.get('/profile.do', (req, res) => {
    res.render('test')
})
module.exports = router;