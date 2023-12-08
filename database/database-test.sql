-- #1
create database if not exists EmployeeDB; --create database

create table if not exists Employees (
    EmployeeID INT auto_increment primary key,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Department VARCHAR(255),
    Salary INT
); --creating Employees table

-- #2
select
	*
from
	Employees
where
	Department = 'Sales'
	and Salary > 5000; --retrieve all employee where department is sales and salary is more than 5000

-- #3
update
	Employees
set
	Department = 'Marketing'
where
	EmployeeID = 5; -- update department of EmployeeID 5 to Marketing 