const router = require('express').Router();

router.use('/weather', require('./weatherRoute'));

module.exports = router;