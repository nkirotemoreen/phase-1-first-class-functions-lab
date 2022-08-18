// Code your solution in this file!

//anonymous function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0 , 2)
    
}
//anonymous function using slice to return from back
 const returnLastTwoDrivers = function(drivers) {
     return drivers.slice(-2);
 }
 //an function containg defined functions as arrays
 const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

 //functions that return functions
 const createFareMultiplier = function(intValue){
    return function(fareValue){
        return intValue * fareValue
    }

 }

 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);

 const selectDifferentDrivers = function(drivers , whichDrivers) {
    return whichDrivers(drivers);
 }