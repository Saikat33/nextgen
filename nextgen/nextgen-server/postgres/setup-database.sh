#!/bin/bash

TEST=`gosu postgres postgres --single <<- EOSQL
   SELECT 1 FROM pg_database WHERE datname='$DB_NAME';
EOSQL`

echo "******CREATING DOCKER DATABASE******"
if [[ $TEST == "1" ]]; then
    # database exists
    # $? is 0
    exit 0
else
gosu postgres postgres --single -jE <<- EOSQL
   CREATE ROLE $DB_USER WITH LOGIN ENCRYPTED PASSWORD '${DB_PASS}' CREATEDB;
EOSQL

gosu postgres postgres --single -jE <<- EOSQL
   CREATE DATABASE $DB_NAME WITH OWNER $DB_USER TEMPLATE template0 ENCODING 'UTF8';
EOSQL
echo "******DATABASE DONE******"

gosu postgres postgres --single -jE $DB_NAME <<- EOSQL
   GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
   CREATE SCHEMA $SCHEMA AUTHORIZATION postgres;
   CREATE TABLE IF NOT EXISTS $SCHEMA.Users 
( id INT PRIMARY KEY  NOT NULL,
  firstname  varying(36),
  lastname varying(36),
  usename varying(36),
  password varying(200),
  salary REAL,
  age INT
  )
WITH (
  OIDS=FALSE
);
ALTER TABLE $SCHEMA.Users OWNER TO $DB_USER;
INSERT INTO $SCHEMA.contactsdemo(id, name, phone, email)
    VALUES (1, 'Alex','Knr', 'alex123','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2', 3456, 33);
 
EOSQL
echo "******GRANT DONE******"




echo "******TABLE DONE******"

fi

echo ""
echo "******DOCKER DATABASE CREATED******"
