DROP DATABASE IF EXISTS empmanagement_db;
CREATE DATABASE empmanagement_db;

USE empmanagement_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE profiles (
  id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,

  FOREIGN KEY (department_id )
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) ,
  last_name VARCHAR(30) ,
  manager_id INT,
  profile_id INT,
  FOREIGN KEY (profile_id )
  REFERENCES profiles(id)
  ON DELETE SET NULL


);

