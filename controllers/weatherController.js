const axios = require('axios');


exports.getWeatherInformation = async (req, res) => {
    const { lng, lat } = req.query;
    const DARKSKY_API_KEY = process.env.DARK_API_KEY;
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}?units=auto`;

    console.log(url);
    axios({ url, responseType: 'json'}).then(data => res.json(data.data))
}