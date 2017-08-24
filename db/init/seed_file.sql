DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER,
  country VARCHAR(80)
);

INSERT INTO users 
(name, age, country)
VALUES
('Betty', 12, 'England'),
('Jane', 42, 'Greece'),
('Betty', 15, 'England'),
('Roberto', 35, 'USA'),
('Jane', 40, 'USA'),
('George', 40, 'England'),
('Rusty', 47, 'Finland');
