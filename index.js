const express = require("express");

const ejs = require("ejs");

// Create express app
const app = express();

// // Create a database connection configuration
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "testfullstack_students", // comment out if running example 1
// });

// // Establish connection with the DB
// db.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`Successful connected to the DB....`);
//   }
// });

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//routes 
app.get('/', (req, res) => {
    res.render("index")
});

//cant believe im so stupid :(
// app.get('/index', (req, res) => {
//     res.render('../views/index.ejs')
// });

app.get('/Food', (req, res) => {
    res.render('../views/Food.ejs')
});

app.get('/Login', (req, res) => {
    res.render('../views/Login.ejs')
});

app.get('/trivia', (req, res) => {
    res.render('../views/trivia.ejs')
});

app.get('/Nature', (req, res) => {
    res.render('../views/Nature.ejs')
});

app.get('/Meme', (req, res) => {
    res.render('../views/Meme.ejs')
});


//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> (console.log(`Server started on PORT NO. ${PORT}`)));