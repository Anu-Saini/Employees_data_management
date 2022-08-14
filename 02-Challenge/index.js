const inquirer = require("inquirer");
const department = require("./lib/department")
// const Engineer = require("./lib/engineer")
// const Intern = require("./lib/intern")
// //import {generateManager, generateEngineer, generateIntern, generateBody} from './scr/script.js'
// const generate = require("./scr/script");
// const fs = require('fs');

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the database.`)
);

const task = {
            type: "list",
            name: "role",
            message: "what would like to do?",
            choices: ["View All Employees", 
                       "Add Employees",
                       "Update Employee role",
                       "View All Roles",
                       "Add Role",
                       "View All Departments",
                       "Add Departments",
                        "Quit"],
          };