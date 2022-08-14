// const inquirer = require("inquirer");
// const department = require("./lib/department")
// const Engineer = require("./lib/engineer")
// const Intern = require("./lib/intern")
// //import {generateManager, generateEngineer, generateIntern, generateBody} from './scr/script.js'
// const generate = require("./scr/script");
// const fs = require('fs');

const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL Username
    user: "root",
    // TODO: Add MySQL Password
    password: "Anu03121977",
    database: "team_db",
  },
  console.log(`Connected to the database.`)
);

// Query database
db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});

// Query database
db.query("SELECT * FROM role", function (err, results) {
  console.log(results);
});

// Query database
db.query("SELECT * FROM employee", function (err, results) {
  console.log(results);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const toDo = {
//             type: "list",
//             name: "task",
//             message: "what would like to do?",
//             choices: ["View All Employees",
//                        "Add Employees",
//                        "Update Employee role",
//                        "View All Roles",
//                        "Add Role",
//                        "View All Departments",
//                        "Add Departments",
//                         "Quit"],
//           };

// const newMemeber = [
//             {
//               type: "input",
//               name: "first_name",
//               message: "Employees first name: ",
//             },
//             {
//               type: "input",
//               name: "last_name",
//               message: "Employees last name: ",
//             },
//              {
//               type: "list",
//               name: "department",
//               message: "Enter Engineer's github: ",
//             },
//              {
//               type: "list",
//               name: "task",
//               message: "Select Employees Department",
//               choices: ["marketing & Sales",
//                        "Engineering",
//                        "Finance",
//                        "Legal"],
//           }];

//        const newDeptt = [
//             {
//               type: "input",
//               name: "department_name",
//               message: "Input New Department Name: ",
//             }];
