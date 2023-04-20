const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const knex = require("./knexfile");
const cors = require('cors');
const db = require('./config/db');
const Comment = require('./models/Comments.js'); 
const Project = require('./models/Projects.js'); 

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('../client/build/'));
app.use('/', express.static('../client/build/index.html'));

const PORT = process.env.PORT || 5000

// Route to get all posts
// app.get("/comments", (req,res)=>{
//     db.query("SELECT * FROM comments", (err,result)=>{
//         if(err) {
//             console.log(err)
//         } 
//         res.send(result)
//     });   
// });

// app.get("/projects", (req,res)=>{
//     db.query("SELECT * FROM projects", (err,result)=>{
//         if(err) {
//             console.log(err)
//         } 
//         res.send(result)
//     });   
// });

// ------ //

// app.get('/projects/:id', (req, res) => {

    // db.query("SELECT * FROM projects", (err,result)=>{
    //     if(err) {
    //         console.log(err)
    //     } 
    //     res.send(result)
    // })
    // const projectsData = result;   

    // const updatedProject = projectsData.find(project => project.id === req.params.id)
    // const { id, name, description, hero, techstacks } = updatedProject
    // res.json({
    //     id: id,
    //     name: name,
    //     description: description,
    //     hero: hero,
    //     techstacks: techstacks
    // })
    // console.log(projectsData)
    // console.log(updatedProject)
    // })

app.get('/comments', (req, res) => {
    Comment.where(req.query)
    .fetchAll()
    .then(comments => {
        res.status(200).json(comments);
    });
});

app.get('/projects', (req, res) => {
    Project.where(req.query)
    .fetchAll()
    .then(projects => {
        res.status(200).json(projects);
    });
});

let connection;
// make connection
if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection(knex.development);
}

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  connection.on('error', function(err) {
    connection = mysql.createConnection(knex.development)
    console.log(err.code);
  });
}

app.listen(PORT, () => console.log("rePORTing for duty on Port 5000"));