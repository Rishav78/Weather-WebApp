const router = require('express').Router();
const controllers = require('../controllers');


router.use('/weather', controllers.weather.getWeatherInformation);

module.exports = router;