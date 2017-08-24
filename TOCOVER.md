# Topics To Cover
Here are a list of topics that will be covered in today's lecture.

## What is Massive.js
- connects server to database
- create once and you're good
- db folder with sql statements is in the root of where you're running nodemon

## Getting Data from DB with Endpoints
- $1, $2, etc.... are parameters. Arguments are given when the SQL function is invoked. 
- Access the db object through req.app.get('db')

## Inserting Data to DB with Endpoints 
- Same as above

## Seed files
- Good for kicking off your database. 
- drop table --->> create table --->> insert data
- Don't forget your semi-colons!!
- Can place seed invocation in massive invocation .then()

## Req.Query
- OPTIONAL unlike params which is required
- ?key=value&key=value
- Make sure to convert string numbers to numbers

