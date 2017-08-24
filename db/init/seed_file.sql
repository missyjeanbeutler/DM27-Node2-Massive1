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
('Betty', 12, 'England'),
('Roberto', 35, 'USA'),
('Rusty', 47, 'Finland');
