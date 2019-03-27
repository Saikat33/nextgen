CREATE TABLE users(id INT PRIMARY KEY  NOT NULL,firstname  TEXT,lastname TEXT,usename TEXT,password Varchar(200),salary REAL,age INT);
INSERT INTO users (id, firstname, lastname, username, password, salary, age) VALUES (1, 'Alex','Knr', 'alex123','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2', 3456, 33);
commit;