# dreamlinesTest

## Requirements
1. nodejs (it was developed and tested on v10.4.1)
2. mongo database.

## Installation

1. install all externall dependencies:
```
npm install
```
2. rename `.env.example` to `.env`
3. set up database connection details in .env file: dbPort(default to 27017), dbHost(default to localhost) and dbName
4. run with `node index.js`

## APIs
path | method | response
-----|--------|---------
/api/all/stats | GET | Returns a list of review statistics per airport. Each item consists of the fields airportName and reviewCount
/api/:airport_name/reviews | GET | Returns a list of reviews for the given airport, ordered by date . The latest review is returned as the first element. Each list item contains the following fields:<br> 1. `date`<br>2.`overallRating`<br>3.`recommended` (flag)<br>4.`authorCountry`<br>5.`content`
/api/:airport_name/stats | GET | Returns detailed stats for a given airport including the following fields: <br> airportName <br>reviewCount<br>averageOverallRating<br>recommendationCount (number of reviews with recommended == 1 )
/api/import/csv | POST | Import data from CSV file to database (Doubles are ignored). Use `content-type: form-data` and put yopur file in `file` param.

## TODO
1. solve dobles 
2. add eslint
3. add logger (winston)
4. tests
