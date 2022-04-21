INSERT INTO department
    (id, dept_name)
VALUES
    (1, 'Human Resources'),
    (2, 'Administration'),
    (3, 'Customer Service'),
    (4, 'Sales'),
    (5, 'Marketing');

INSERT INTO roles
    (id, title, salary, department_id)
VALUES
    (1, 'Manager', 30000.5, 3);
    

INSERT INTO employees 
    (id, first_name, last_name, roles_id, manager_id)
VALUES
    (1, 'Anthony', 'Bridgerton', 1, NULL);