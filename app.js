require('dotenv/config');
const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT, function(){
    console.log(`Server online on ${process.env.PORT}`);
});