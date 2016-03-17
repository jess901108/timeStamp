# Time Stamp Service API Project(Node.js)

## Overview
  This is an simple API node.js project that takes one format of time input and 
  return and display a JSON object of
  dates display in two formats:
 
  - UNIX
  - Human Readable format
  
you  can test this app at https://timestampproject-jess901108.c9users.io/

## Usage
#### Sample Input
```
https://timestampproject-jess901108.c9users.io/March 16, 2016
```
or 
```
https://timestampproject-jess901108.c9users.io/1458086400
```

#### Sample Output
```
 {
  natural: "March 16, 2016",
  unix: "1458086400"
  }
```
## Run this app

You need to have **node.js** installed.

Clone the file to your local device and launch it with node using  ```npm run start``` or ```node server.js```