# Train Time

### Overview
*This app uses moment.js as well as google firebase. 
*It demonstrates using long term storage and pulling the existing values from the database on load. 
*This is achieved with an on child create trigger. As such, this will fire for every row in the database. 
*The values from this are written dynamically to a table using jquery. 
*An interval is set to update the value of moment.js to the header.
*The difference between the train arrival and the current time is calculated during node.js and used to populate the time until next train

### Pain points
*Getting the time variance to work was very challenging
