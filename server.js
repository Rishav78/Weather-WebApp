if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static('public'));


// app.post('/weather')

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`listening on port ${PORT}`);
});