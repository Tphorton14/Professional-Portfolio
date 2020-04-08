const express = require('express');

const PORT = process.env.PORT || 2000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static('./public'))

//routes
require('./routes/html-routes')(app);



app.listen(PORT, function () {
    console.log('listening on port' + PORT);
    console.log('http://localhost:' + PORT);
});