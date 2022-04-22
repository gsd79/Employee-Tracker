INSERT INTO department
    (id, dept_name)
VALUES
    (1, 'Human Resources'),
    (2, 'Administration'),
    (3, 'Customer Service'),
    (4, 'Sales'),
    (5, 'Marketing');

INSERT INTO roles
    (id, title, salary, dept_id)
VALUES
    (6, 'Manager', 250000, 3),
    (7, 'Vicontess', 300000, 2),
    (8, 'Diamond', 100000, 1),
    (9, 'Duke', 250000, 4),
    (10, 'Lady Whistledown', 450000, 5);
    

    

INSERT INTO employees 
    (id, first_name, last_name, role_id, manager_id)
VALUES
    (515, 'Anthony', 'Bridgerton', 6, NULL),
    (45, 'Kate', 'Sharma', 6, null),
    (5451, 'Daphne', 'Basset', 8, null),
    (1312, 'Simon', 'Hastings', 9, null),
    (87841, 'Penelope', 'Featherington', 10, 625),
    (625, 'Colin', 'Bridgerton', 6, NULL);