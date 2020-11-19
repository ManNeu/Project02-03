INSERT INTO persons (fname, lname, email, pass)
VALUES 
('Bob', 'Dylan', 'a@email.au', 'abc123'),
('Janis', 'Joplin', 'b@email.au', 'abc123'),
('Tom', 'Jones', 'c@email.au', 'abc123'),
('Bernard', 'Fanning', 'd@email.au', 'abc123');

INSERT INTO protections (person_id, disease_id, vaccinated, vaxdate, booster)
VALUES 
(1, 10, 1, '2020-06-01', '2030-06-01'),
(1, 16, 1, '2020-06-01', '2025-06-01'),
(1, 2, 1, '2020-06-01', '2021-01-01'),
(1, 4, 1, '2020-06-01', '2027-06-01'),
(2, 1, 1, '2020-06-01', '2030-06-01'),
(2, 2, 1, '2020-06-01', '2025-06-01'),
(2, 8, 1, '2020-06-01', '2021-01-01'),
(3, 3, 1, '2020-06-01', '2030-06-01'),
(3, 4, 1, '2020-06-01', '2025-06-01'),
(4, 10, 1, '2020-06-01', '2030-06-01');

INSERT INTO protections (person_id, disease_id, vaccinated)
VALUES 
(4, 1, 0),
(4, 20, 0),
(4, 22, 0),
(4, 17, 0),
(3, 14, 0),
(3, 17, 0),
(3, 18, 0),
(2, 21, 0),
(2, 22, 0),
(1, 22, 0);

INSERT INTO protections (person_id, disease_id, vaccinated, lifetime)
VALUES 
(4, 2, 1, 1),
(1, 2, 1, 1);
drop table persons;
SELECT * from persons;