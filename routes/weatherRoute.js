const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.weather.getWeatherInformation)

module.exports = router;