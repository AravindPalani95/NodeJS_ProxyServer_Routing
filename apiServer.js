const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var userService = require('./router/user.router');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/users",userService);

app.listen(5000,()=>{
    console.info("APIServer Started, Listening at port 5000");
})

module.exports = app;