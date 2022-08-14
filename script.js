
          
          
          const newEmployee = (newEmployee) => {
            return `
                  INSERT INTO employee (first_name, last_name , role_id, manager_id)
                  VALUES ( ${intern.getfName()},${intern.getlName()},${intern.getRole()},${intern.getmanager()})` };  
          
          const newRole = (newRole) => {
            return `
                  INSERT INTO role (title, salary, department_id)
                  VALUES ( ${intern.getfName()},${intern.getlName()},${intern.getRole()},${intern.getmanager()})`}
                  
                  
                      
CREATE TABLE department (
            id INT NOT NULL PRIMARY KEY,
          name VARCHAR(30) NOT NULL
          );
          
          CREATE TABLE role (
            id INT NOT NULL PRIMARY KEY,
            title VARCHAR(30) NOT NULL,
            salary DECIMAL(30),
            department_id INT not NULL,
          );
          
          CREATE TABLE employee (
            id INT NOT NULL PRIMARY KEY,
            first_name VARCHAR(30) NOT NULL,
            last_name VARCHAR(30) NOT NULL,
            role_id INT NOT NULL,
            manager_id INT
          );
          
                          `;
          };
          
          const generateManager = (manager) => {
            console.log(manager);
            return `
          <div class="card employee-card">
          <div class="row">
          <div class="col">
              <div class="class-header">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
              </div>
              <div class="card-body">
                   <ul class="list-group">
                      <li class="list-group-item">Emp ID: ${manager.getID()}</li>'
                      <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>'
                      <li class="list-group-item">Office no.: ${manager.officeNumber}</li>'
                  </ul>
            </div>
            </div>
            </div>
            </div>`;
          };
          
          
           const generateEngineer = (engineer) => {
            return `
              <div class="card employee-card">
              <div class="row">
              <div class="col">
                          <div class="class-header">
                                <h2 class="card-title">${engineer.getName()}</h2>
                                <h3 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
                          </div>
                          <div class="card-body">
                               <ul class="list-group">
                                  <li class="list-group-item">Emp ID: ${engineer.getID()}</li>'
                                  <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>'
                                  <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()} </a></li>'
                              </ul>
                        </div>
                        </div>
                        </div>
                        </div>`;
          };
          
          module.exports = {generateEngineer, generateBody, generateIntern, generateManager}