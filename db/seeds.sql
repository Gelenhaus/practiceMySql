
  INSERT INTO departments (name)
  VALUES 
  ('sales'),
  ('marketing'),
  ('finance');

INSERT INTO roles (title, salary, department_id)
  VALUES
  ('worker bee', 40000, 1),
  ('drone bee', 50000, 2),
  ('honey bee', 60000, 3);

  INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 2),
  ('Virginia', 'Woolf', 1, 3),
  ('Piers', 'Gaveston', 0, 2),
  ('Charles', 'LeRoi', 1, 1),
  ('Katherine', 'Mansfield', 1, 3),
  ('Dora', 'Carrington', 0, 2),
  ('Edward', 'Bellamy', 0, 3),
  ('Montague', 'Summers', 1, 3),
  ('Octavia', 'Butler', 1, 2),
  ('Unica', 'Zurn', 1, 3);
  