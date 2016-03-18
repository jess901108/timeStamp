# Time Stamp Service API Project(Node.js)

## Overview
  This is an simple API node.js project that takes one format of time input and 
  return and display a JSON object of
  dates display in two formats:
 
  - UNIX
  - Human Readable format
  
you  can test this app at https://jessica-timestampapi.herokuapp.com/

## Usage
#### Sample Input
```
https://jessica-timestampapi.herokuapp.com/March 16, 2016
```
or 
```
https://jessica-timestampapi.herokuapp.com/1458086400
```

#### Sample Output
```
 {
  "natural": "March 16, 2016",
  "unix": "1458086400"
  }
```
## Run this app

You need to have **node.js** installed.

Clone the file to your local device and launch it with node using  ```npm run start``` or ```node server.js```