'use strict';
var getUserSync = reqquire('./getUserSync'); 

var user1 = getUserSync('345');
console.log('user1', user1);

var user2 = getUserSync('675');
console.log('user2', user2);

var sum = 1 + 2;
console.log('The sum is '+ sum);