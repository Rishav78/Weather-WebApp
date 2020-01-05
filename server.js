if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static('public'));

app.use('/', require('./routes'));

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`listening on port ${PORT}`);
});