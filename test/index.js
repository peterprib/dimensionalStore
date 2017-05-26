"use strict";
console.log("DataStore tests start");
var dataStore = new require("DataStore")('test', "tests description");
dataStore.
console.log("DimensionalStore tests start");
var cube = new require("DimensionalStore")("test", " a test cube", dataStore);
cube.addDimension("time", "Time")
    .addLevel("year", "Year", (column) => { return })
    .addLevel("month", "Month")
    .addLevel("week", "Week")
    .addLevel("day", )
    .addLevel("hour")
    .addLevel("minute");
cube.addDimension("location", "Location")
    .addLevel('state')
    .addLevel('postcode');
console.log("DimensionalStore tests completed");