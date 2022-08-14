INSERT INTO department (name)
VALUES ('marketing & Sales'),
       ('Engireeing'),
       ('Finance'),
       ('Legal');
       
INSERT INTO role (id,title, salary, department_id)
VALUES (1,'Sales Lead', 100000, 1),
       (2,'Sales person', 80000, 1),
       (3,'Lead Engineer', 150000, 2),
       (4,'Software Engineer', 120000, 2),
       (5,'Accounts manager', 160000, 3),
       (6,'Accountant', 125000, 3),
       (7,'Legal Team Lead', 250000, 4),
       (8,'lawyer', 190000, 4);  
       
INSERT INTO employee (id,first_name, last_name, role_id, manager_id)
VALUES (101,'anuraag','saini', 1,101 ),
       (102,'AAAA','BBBB',2 ,101 ),
       (103,'CCCC','DDDD',2 ,101),
       (104,'EEEE','FFFF',3,101),
       (105,'GGGG','HHHH',4 ,103),
       (106,'IIII','JJJJ',4,103) ,
       (107,'KKKKK','LLLL',5,101),
       (108,'MMMM','NNNN',6, 107),
       (109,'OOOO','PPPP',6,107),
       (110,'QQQQ','RRRR',7,101),
       (111,'SSSS','TTTT',8 ,110);
      
       
