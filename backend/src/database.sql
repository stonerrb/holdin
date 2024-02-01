CREATE DATABASE Intern;

CREATE TABLE stock (
    stock_id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    last FLOAT,
    buy FLOAT,
    sell FLOAT,
    volume FLOAT,
    base_unit VARCHAR(25)
);