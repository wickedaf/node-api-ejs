const express = require('express');
const cors = require('cors');

const app = express();
const port = 4200;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// set the view engine to ejs
app.set('view engine', 'ejs');

let tagline = "";

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/views/index.html");

    //! EJS Template engine render
    res.render('index', {
      tagline: tagline
    });
});
  
app.post('/', (req, res) => {
    const reqBody = req.body;
    tagline = reqBody.tagline;
 
    res.status(200).json({
        status: 'succes',
        data: reqBody,
      })
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});