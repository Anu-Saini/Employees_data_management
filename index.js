// Importing packages 
const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const mySql = require('mySql2');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//connecting to daabase
const db = mySql.createConnection(
{
  //mysql username & password
host: 'localhost',
user: 'root',
password: 'Anu03121977',
database: 'empmanagement_db',
},
console.log('Connected to EmployeeManagement database')
);

function mainPage (){
  inquirer
  .prompt([{
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices:[
      'View all Departments',
      'Add a new Department',
      'View all Roles',
      'Add a new Role',
      'View all Employees',
      'Add a new Employee',
      'Update an existing Employee',
      'Quit',
      ],
   }])

.then ((answers) => {
  if (answers.action == 'View all Departments'){
    viewAllDepart();
  } else if (answers.action == 'Add a new Department'){
    addDepart();
  } else if (answers.action == 'View all Roles'){
    viewAllRole();
  } else if (answers.action == 'Add a new Role'){
    addRole();
  } else if (answers.action == 'View all Employees'){
    viewAllEmployee();
  } else if (answers.action == 'Add a new Employee'){
    addEmployee();
  } else if (answers.action == 'Update an existing Employee'){
    updateEmployee();
  } else {
    quit();
  };
  });
};

//view all departments
const viewAllDepart = () => 
new Promise ((resolve, reject) => {
  db.query(
    'SELECT * FROM department',
      function (err,results) {
    if(err) {
      reject(err);
    } else {
      resolve(console.table(results), mainPage());
     };
  }
  );
});


//adding a new department
function addDepart () {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'departName',
    message: 'please enter the name of the new department',
   }, 
    ])
  .then ((answers) => {
    db.query(
  `INSERT INTO department (name) VALUES ("${answers.departName}");`,
 
  function(err, results) {
  console.log("new department added"), mainPage();
  });
});
}

// view all Employees
const viewAllEmployee = () => 
new Promise ((resolve, reject) => {
  db.query(
    `SELECT EMP.id, EMP.first_name, EMP.last_name, profiles.title AS job_title, DEPT.name AS Department,
     profiles.salary, CONCAT(MAN.first_name, " ", MAN.last_name) AS manager FROM employee AS EMP LEFT JOIN profiles 
     AS profiles ON EMP.profile_id = profiles.id LEFT JOIN employee as MAN ON EMP.manager_id = MAN.id JOIN 
     department AS DEPT ON profiles.department_id = DEPT.id;`, 
  function (err,results) {
    if(err) {
      reject(err);
    } else {
      resolve(console.table(results), mainPage());
   
    };
  }
  );
});

// Adding a new Employee
function addEmployee () {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'emp_firstname',
    message: 'Please enter employees First name',
   }, 
   {
    type: 'input',
    name: 'emp_lastname',
    message: 'Please enter employees Last name',
   }, 
   {
    type: 'input',
    name: 'employee_role',
    message: 'Please enter employees role',
   }, {
    type: 'list',
    name: 'employee_mgr',
    message: 'Please enter employees manager',
    choices: [
      'Rushi Malothra',
      'raashi Juhi',
      'Adam Walters',  
      'Niel Singh',
      'Shivam Roy'
    ],
   },
  ])
  .then ((answers) => {
    let managerId = function() {
      if(answers.employee_mgr === 'Rushi Malothra') {
        return 1;
      } else if(answers.employee_mgr === 'raashi Juhi') {
        return 2;
      } else if(answers.employee_mgr === 'Adam Walters') {
        return 3;
      } else if(answers.employee_mgr === 'Niel Singh') {
        return 4;
      } else if(answers.employee_mgr === 'Shivay Roy') {
        return 5;
      }  else if(answers.employee_mgr === ''){
        return "Null";
      };
      };
    console.log( `INSERT INTO employee ( first_name, last_name, profile_id, manager_id) 
    VALUES ("${answers.emp_firstname}","${answers.emp_lastname}","${answers.employee_role}",${managerId(answers.employee_mgr)})`)
  db.query(
  `INSERT INTO employee ( first_name, last_name, profile_id, manager_id) 
  VALUES ("${answers.emp_firstname}","${answers.emp_lastname}","${answers.employee_role}",${managerId(answers.employee_mgr)});`,
 
  function(err, results) {
  console.log("new employee added"), mainPage();
  });
});
}

//updating an employee details
function updateEmployee () {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'All_Employees',
    message: 'Please enter employees detials for update',
   }, 
   {
    type: 'input',
    name: 'newRole',
    message: 'Specify the new Role Id',
   }, 
  ])
.then ((answers) => {
  db.query(
`UPDATE employee SET role_id = ${answers.newRole} WHERE id=${answers.All_Employees};`,

function(err, results) {
console.log("Employee updated"), mainPage();
});
});
}

// view all employee roles
const viewAllRole = () => 
new Promise((resolve, reject) => {
  db.query(
    'SELECT profiles.id AS id, profiles.title AS title, DP.name AS department, profiles.salary AS salary FROM profiles JOIN department DP ON profiles.department_id = DP.id;',    
    function(err, results) {
      if(err) {
        reject(err)
      } else {
    resolve(console.table(results), mainPage());
      }
    })
});

//adding a new role
function addRole () {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'roletitle',
    message: 'What is the Role title',
   }, 
   {
    type: 'input',
    name: 'rolesalary',
    message: 'Please enter the salary for the Role',
   }, 
   {
    type: 'input',
    name: 'department',
    message: 'please enter the departmentid for the role',
   }, 
   ])
    .then ((answers) => {
//       const a = `INSERT INTO profiles (title, salary, department_id) VALUES ("${answers.roletitle}","${answers.rolesalary}","${answers.department}";`
//  console.log(a);
      db.query(
  `INSERT INTO profiles (title, salary, department_id) VALUES ("${answers.roletitle}","${answers.rolesalary}","${answers.department}");`,
 
  function(err, results) {
    // console.log("rahat");
  console.log("new Role added"), mainPage();
  });
});
}

function init(){
  console.log( 'welcome to CEDS(Company employee data system)');
  mainPage();
}

function quit() {
  process.exit(1);
  }

  init();










