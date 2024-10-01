#!/bin/bash

echo "Wait for postgreSQL database start..." >> /dev/stdout
time wait-for db:5432 -t 300 -- echo "PostgreSQL ready!" >> /dev/stdout
sleep 3
createdb -h db -U postgres -e reservation  >> /dev/stdout
pg_restore -h db -U postgres -d reservation < pgdb.psql  >> /dev/stdout
rm -rf async-seed.sh seed.sh
