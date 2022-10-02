INSERT INTO department (name)
VALUES ('Top Management'),
       ('Marketing & Sales'),
       ('Engineering'),
       ('Info-techonology'),
       ('Cyber-Security'),
       ('R&D'),
       ('HumanResource'),
       ('Administration'),       
       ('Finance'),
       ('Legal');
       
INSERT INTO profiles (title, salary, department_id)
VALUES('General Manager', 250000, 1),
      ('Sales Lead', 100000, 2),
       ('Sales person', 80000, 2),
       ('Lead Engineer', 150000, 3),
       ('Software Engineer', 120000, 4),
       ('Developer', 180000, 4),
       ('Solution Architect', 200000, 4),
       ('Accounts manager', 160000, 9),
       ('Accountant', 125000, 9),
       ('Legal Team Lead', 250000, 10),
       ('lawyer', 190000, 10);  
       
INSERT INTO employee (first_name, last_name, profile_id, manager_id)
VALUES ('Anuraag','Saini', 1 ,1),
       ('Anu','Saini',1 ,5),
       ('shivraj','singh',4 ,6),
       ('Atul','Singh',3 ,5 ),
       ('Rushi','Malothra',4 ,1),
       ('raashi','Juhi',4 ,1) ,
       ('kanwal','koptar',5 ,10),
       ('christopher','salivan',6 ,10),
       ('Adam','walters',6 ,1),
       ('Niel','Singh',7 ,1),
       ('Rushtom','parsi',8 ,8),
       ('Shivay','Ryan',2 ,1),
       ('Shivam','Roy',11 ,1);

       
      
       
