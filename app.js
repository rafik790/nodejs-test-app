const express =require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app= express();
const port = process.env.PORT || 3000;
const corsOptions = {
    "origin": "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Test Demo Project.." });
});


// router
//require('./routes')(app);
app.listen(port, () => console.log(`Listen on port ${port}`)) 
module.exports = app;